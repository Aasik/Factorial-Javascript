function factorialization(num){
    if(num <  0){
        return -1;
    }else if(num == 0){
        return 1;
    }else{
        return num * factorialization(num -1);
    }
}

alert(factorialization(5));