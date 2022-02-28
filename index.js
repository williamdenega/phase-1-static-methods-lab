class Formatter {
  //add static methods here



  static capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }
  static sanitize(string){
    //this keeps the spaces in the string
    return string.replace(/[^A-Za-z0-9 '-]+/g,"")
  }
  static titleize(string){
    let exceptions = ['the','a','an','but','of','and','for','at','by','from']
    let answer = []
    let myArray = string.split(" ")

    for(let i = 0; i < myArray.length;i++){
      if(i == 0){
        answer.push(this.capitalize(myArray[i]))
      }else{
        if(exceptions.includes(myArray[i])){
          answer.push(myArray[i])
        }else{
          answer.push(this.capitalize(myArray[i]))
        }
      }
    }
    return answer.join(' ')
  }

}