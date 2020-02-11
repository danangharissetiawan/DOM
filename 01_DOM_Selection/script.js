/*
- DOM Selection --> sebagai tahap awal jika ingin melakukan manipulasi atau penelusuran pada DOM.
- Macam-macam DOM Selection:
- di depan DOM seletion harus dikasih root node nya (document)





    * querySelector()
            ---> * Menyeleksi element berdasarkan selectornya
                 * Mengembalikan --> Element

    * querySelectorAll()
            ---> * Menyeleksi element berdasarkan selectornya
                 * Mengembalikan --> Node List
                
*/

/*
* getElementById()
            ---> * Menyeleksi element berdasarkan Id nya
            ---> * Mengembalikan --> Element
*/
const judul = document.getElementById('judul'); // memasukan selection ke dalam variabel.
judul.style.color = "red"; // manipulasi object dengan mengganti style css nya.
judul.style.backgroundColor = "#faebd7";

/*
* getElementsByTagName()
            ---> * Menyeleksi element berdasarkan Tag HTML
            ---> * Mengembalikan --> HTML Collection
            - HTML Collection berupa array jadi ketika kita ingin menyeleksi kita harus menyertakan index nya,
              atau menggunakan looping jika ingin menyeleksi semuanya.
*/
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "#d3d3d3";
}

/*
* getElementsByClassName()
            ---> * menyeleksi element berdasarkan Class
            ---> * Mengembalikan --> HTML Collection
            - HTML Collection apapun yang berada di parent elemen yang di seleksi akan terkena seleksi tersebut.
*/

const content = document.getElementsByClassName("content");
content[0].style.color = "#800000";
content[1].style.color = "#0000cd";

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = " Ini dirubah dari javascript";
p1.style.color = "#3cb371";
p1.style.fontSize = "30px";