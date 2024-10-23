public class breaks {
    public static void main(String[] args) {
        int i=10;
        for(int j=1;j<=i;j++){
            System.out.println(j);
            // if(j==5){
            //     break;
            // }
            if(j!=5){
                System.out.println("hello continue");
                continue;
            }
        }
    }
}
