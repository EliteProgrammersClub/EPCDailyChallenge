import java.util.Scanner;

public class ReverseString {
    public static void main(String args[]) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a String ");
        String n=sc.next();// we are taking a user input here
        String rev=reverse(n);// We are passing the input to function which will reverse any string
        System.out.println(rev);
        sc.close();
    }
    public static String reverse(String str) {
        String w="";// declaring and initialising a temp variable with blank,to store the value and return the string
        for(int i=0;i<str.length();i++) {
            w=str.charAt(i)+w; // Since it's a String,we can add any character at any part of the String...Here I am adding the character extracted,at the front of w to get the final reverse value 
        }
        return w;
    }
}
