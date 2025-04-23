#include<stdio.h>
int fun(int x,int y=20){
    return x+y;
}
void main(){
    int a=fun(10);
    printf("%d",a);
}