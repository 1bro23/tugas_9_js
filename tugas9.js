var objek=
{
  objek1:102,
  objek2:"ay",
  objek3:"squash"
}
console.log(objek.objek1);
console.log(objek.objek2);
console.log(objek.objek3);
objek.objek1=201;
objek.objek3=369;
console.log("-------------------------------------------------------------------")
for(var a in objek)
{
  console.log(a,":",objek[a]);
}
