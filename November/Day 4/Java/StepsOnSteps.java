import java.util.Scanner;

public class StepsOnSteps {
    public static void main(String args[]) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a Number");
        int s=sc.nextInt(); // taking a User input as a number
        steps(s);
    }
    /*
    * we are going to print one of the basic and simple patterns in a Programming language
    * */
    public static void steps(int n) {
        for(int i=1;i<=n;i++) {
            System.out.print("'");
            for(int j=1;j<=i;j++) {
                System.out.print("#"); // The print command prints '#' one after another for every value of j < i..if i=5,then this will run 5 times and print ##### in a single line
            }
            System.out.print("'");
            System.out.println(); // to go to the next line
        }
    }
}