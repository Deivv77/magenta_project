import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class DTO {
    private Date datetime;
    private double value;
    private Type sensortype;

    public DTO(Date datetime, double value, Type sensortype) {
        this.datetime = datetime;
        this.value = value;
        this.sensortype = sensortype;
    }

    public Date getDatetime() {
        return datetime;
    }

    public double getValue() {
        return value;
    }

    public Type getSensortype() {
        return sensortype;
    }


    public static void main(String[] args) {

     ParserCSV b = new ParserCSV("air_quality_data.csv ");
        ReaderCSV a = new ReaderCSV(b);
     ArrayList <DTO> newRow = new ArrayList<>();
     ArrayList<String> _datetime = a.fetch(0);
     ArrayList<String> _value = a.fetch(4);
     ArrayList<String> _sensortype = a.fetch(3);
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(b.getFile().getAbsolutePath()));
            SimpleDateFormat formatter = new SimpleDateFormat("EEEE, MMM dd, yyyy HH:mm:ss a");
            String line;
            Double value;
            Date date;
            Type sensortype;
            int i = 0;
            while ((line = reader.readLine()) != null) {
                value = Double.parseDouble(_value.get(i));
                date = formatter.parse(_datetime.get(i));
                sensortype = Type.valueOf(_sensortype.get(i));

                DTO addToList = new DTO (date,value,sensortype);
                newRow.add(addToList);
                i++;
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }



    }

}
