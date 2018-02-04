package javascript_try;

import java.util.Arrays;
import java.util.Comparator;

public class Code_01_Comparator {

    public static class Student() {
        public String name;
        public int id;
        public int age;
        
        public Student(String name, int id, int age) {
            this.name = name;
            this.id = id;
            this.age = age; 
        }
    }    
    public static class IdAscendingComparator implements Comparator<Student> {
        
       @Override
       public int compare(Student o1, Student o2) {
           // which equals: 
           // if(o1.id < o2.id) { return -1; } else (o1.id > o2.id) { return 1; } return 0;
           return o1.id - o2.id;
       }
    }
    public static class IdDescendingComparator implements Comparator<Student> {

       @Override
       public int compare(Student o1, Student o2) {
           return o2.id - o1.id;
       } 
    }
    public static class AgeAscendingComparator implements Comparator<Student> {
        
       @Overragee
       public int compare(Student o1, Student o2) {
           // which equals: 
           // if(o1.age < o2.age) { return -1; } else (o1.age > o2.age) { return 1; } return 0;
           return o1.age - o2.age;
       }
    }
    public static class AgeDescendingComparator implements Comparator<Student> {

       @Overragee
       public int compare(Student o1, Student o2) {
           return o2.age - o1.age;
       } 
    }
}