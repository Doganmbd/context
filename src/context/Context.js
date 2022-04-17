import {createContext,useState} from "react" ;

export const Context = createContext();

//* Provider Context i diğer componentlerde kullanabilmek için provider oluşturuyorum.Bu provider benim elimde olan data olsun,product,fonk. hepsini bunun içinde oluşturacam .Bütün işlemlerimi provider içinde tutacam.

const Data = [
    {
        id: 1,product:"X",price:10,quantity:1
    },
    {
        id: 2,product:"Y",price:20,quantity:1
    },
    {
        id: 3,product:"Z",price:30,quantity:1
    }
];

export const ProductProvider = (props) => {
    const [data,setData] = useState(Data);

    const handleClickIncrease = (e) => {
        console.log(e.target.id);
        const newData = [...data];
        newData[e.target.id - 1].price++;
        setData(newData);
      };
      const handleClickDecrease = (e) => {
        console.log(e);
        const newData = [...data];
        newData[e - 1].price--;
        setData(newData);

      };


      ///* en sonda bir component gibi return işlemi yapmam lazım.nerde bu deeğişiklikleri kullanacaksam onlar için bunları yazmalıyım.alt componentler children oluyor. ve ben bunları context.provider ile sarmallıyorum.

     //* Yukarıda oluşturduğum context componentini burada provider olarak göndermesi için context.provider yazıp bütün yazdığım fonksiyonları vb. kapsayacak nerede bunları kullanacaksam bunlar context provider ın alt componenti olmak zorunda.yani ben {props.children} dersem ben tüm alt childrenları kapsamış oluyorum .

     //*O zmaan bizim Context timiz içerisinde gelen children ları sarmallıyor.bu childrenları yani diğer compoenntlerimizin hepsini export ettiğimiz ProductProvider sarmallaması lazım ki diğerlerine istediğim şeyleri props olarak gönderebileyim.

     //* value yazıp ve iki tane süzlü parantez ile (obje içerisine) diğer componentlerde kullanacağımız şeyleri yazarız.

      return (
        <Context.Provider value={{data,setData,handleClickIncrease,handleClickDecrease}}>
            {props.children}
        </Context.Provider>
      )

}

