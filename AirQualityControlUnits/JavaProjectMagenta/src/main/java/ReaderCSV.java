import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class ReaderCSV {

    ParserCSV a;
    ArrayList <String> sensorNames =new ArrayList<>();
    ArrayList <String> values = new ArrayList<>();

    ArrayList <String> dateTime = new ArrayList<>();

public ReaderCSV(ParserCSV parser)
{
    a = parser;
    sensorNames = fetch(3);
    values = fetch(4);
    dateTime= fetch(0);
}




    public ArrayList<String> fetch(int _index) {
        ArrayList<String> values = new ArrayList<>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader(a.getFile().getAbsolutePath()));
            String line;
            while ((line = reader.readLine()) != null) {
                String[] data = line.split(";");
                String item = data[_index];
                values.add(item);
            }
        } catch (IOException e) { e.printStackTrace(); }

        return values;


    }

    public ArrayList<DataReader> fetch()
    {
        ArrayList<DataReader> listD = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        try {
            BufferedReader reader = new BufferedReader(new FileReader(a.getFile().getAbsolutePath()));
            reader.readLine();
            String line;
            while ((line = reader.readLine()) != null) {
                String[] data = line.split(";");

                String dateTime = data[0].split(" ")[0];
                String values = data[4];
                String sensorNames = data[3];
                try {
                    if (sensorNames.equals("PM2.5")) {
                        DataReader a = new DataReader(formatter.parse(dateTime), Double.parseDouble(values), Type.valueOf("PM2_5"));
                        listD.add(a);
                    } else {
                        DataReader a = new DataReader(formatter.parse(dateTime), Double.parseDouble(values), Type.valueOf(sensorNames));
                        listD.add(a);
                    }

                    } catch(ParseException e){
                        throw new RuntimeException(e);
                    }

            }

        } catch (IOException e) { e.printStackTrace(); }
        return listD;
    }


    public  ArrayList<String> divideDate()
    {
        ArrayList <String> Alldates = new ArrayList<>();
        ArrayList <String> date = new ArrayList<>();
        for (String data : this.getDateTime()) {
            Alldates.add(data.split(" ")[0]);
        } //remove hours
        for (int i = 1; i < Alldates.size(); i++) {
            if (i + 1 < Alldates.size() && !(Alldates.get(i).equals(Alldates.get(i + 1)))) {
                date.add(Alldates.get(i));

            }
        }
        date.add(Alldates.get(Alldates.size() - 1));
        return date;
    }

    public ArrayList <String> getSensorNames()
    {
        return sensorNames;
    }

    public ArrayList <String> getValues()
    {
        return values;
    }

    public ArrayList <String> getDateTime()
    {
        return dateTime;
    }
}
