import java.util.*;
public class FirstLetterCapital
{
    public static void main(String args[])
    {
        Scanner ob=new Scanner(System.in);
        System.out.println("Enter the sentence.");
        String s=ob.nextLine();

        s=" "+s;
        String cap="";
        for(int i=0;i<s.length();i++)
        {
            char x=s.charAt(i);
            if(x==' ')
            {
                cap=cap+" ";
                char y=s.charAt(i+1);
                cap=cap+Character.toUpperCase(y);
                i++;
            }
            else
            {
                cap=cap+x;
            }
        }
        System.out.println("The new String with capital letters is: "+"\n"+cap);
    }
}