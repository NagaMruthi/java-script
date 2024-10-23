public class primenumber {
    public static void main(String[] args) {
        int i=4;
        int count=0;
        for(int j=1;j<=i;j++){
            if(i%j==0){
                count=count+1;
            }
        }
        if(count==2){
            System.out.println("this is primen number");
        }
        else{
            System.out.println("not a prime number");
        }
    }
}
