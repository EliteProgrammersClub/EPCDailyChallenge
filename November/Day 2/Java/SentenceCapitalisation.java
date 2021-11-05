import java.util.*;
 public class SentenceCapitalisation {
     public static void main(String[] args){
	 Scanner in = new Scanner(System.in);
     System.out.print("Input a Sentence: ");
	 String line = in.nextLine();
	 String upper_case_line = ""; 
       Scanner lineScan = new Scanner(line); 
         while(lineScan.hasNext()) {
             String word = lineScan.next(); 
             upper_case_line += Character.toUpperCase(word.charAt(0)) + word.substring(1) + " "; 
         }
      System.out.println(upper_case_line.trim()); 
    }
}
