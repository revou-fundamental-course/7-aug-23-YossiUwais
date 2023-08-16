/* Rumus Menghitung Luas Persegi */
function hitungluas(){
    alas = document.getElementById("alas").value;
    tinggi = document.getElementById("tinggi").value;
    luas = 1/2*alas*tinggi;
    document.getElementById("luas").value=luas;

}
/* Rumus Menghitung Keliling Persegi */
function hitungkel(){
    s1 = document.getElementById("s1").value;
    s2 = document.getElementById("s2").value;
    s3 = document.getElementById("s3").value;
    kel = parseInt(s1)+ parseInt(s2)+ parseInt(s3);
    document.getElementById("kel").value = kel;

}
