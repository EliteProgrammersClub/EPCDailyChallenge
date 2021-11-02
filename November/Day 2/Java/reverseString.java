import java.util.Scanner;

public class ReverseString {
    public static void main(String args[]) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a String ");
        String n=sc.next();
        String rev=reverse(n);
        System.out.println(rev);
        sc.close();
    }
    public static String reverse(String str) {
        String w="";
        for(int i=0;i<str.length();i++) {
            w=str.charAt(i)+w;
        }
        return w;
    }
}