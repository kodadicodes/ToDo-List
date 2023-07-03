const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {

  // Formun gönderilme olayını dinleyen ve submit işlemi gerçekleştiğinde belirtilen addNewItem işlevini tetikleyen
  // bir event listener ekler.
  form.addEventListener('submit', addNewItem);

  taskList.addEventListener("click", deleteItem);

  btnDeleteAll.addEventListener('click', deleteAllItems);
}

// e parametresi, web sayfalarında veya uygulamalarda gerçekleşen etkinlikleri
// (Örneğin, bir düğmeye tıklama, bir formu gönderme, bir klavye tuşuna basma gibi etkinlikler)
// temsil eden olayların ayrıntılarına erişim sağlamak için kullanılan bir referanstır.
function addNewItem(e) {
  if (input.value === "") {

    // alert fonksiyonu, tarayıcıda kullanıcıya bir bildirim penceresi görüntüleyerek "Please enter a task name." gibi bilgilendirici
    // veya uyarı mesajlarının iletilmesini sağlar.
    alert("Please enter a task name.");
  }

  // `document.createElement()` metodu, JavaScript'te kullanılarak HTML belgesinde yeni bir HTML öğesi oluşturmayı sağlar
  // ve burada "li" öğesi oluşturmak amacıyla kullanılmıştır.
  const li = document.createElement("li");

  // `className` ifadesi, bir HTML öğesinin sınıf adını temsil eder ve sınıf adını almak veya değiştirmek için kullanılır.
  li.className = "list-group-item list-group-item-secondary";

  // `createTextNode()` metodu, belirli bir metin içeriğini temsil eden bir metin düğümü (Text Node) oluşturmak için kullanılır.
  // Bu metot, bir HTML öğesinin içine metin eklemek için kullanılabilir.
  // `li.appendChild(document.createTextNode(input.value));`, bir HTML "li" öğesine "input" alanının değerini (value) içeren kısa bir metin düğümü ekler.
  li.appendChild(document.createTextNode(input.value));

  const a = document.createElement("a");

  // `classList` ifadesi, bir HTML öğesinin sınıf listesini temsil eder ve öğenin sınıflarını kontrol etmek,
  // eklemek veya kaldırmak için kullanılır.
  a.classList = "delete-item float-right";

  // `setAttribute()` bir JavaScript metodu olup, belirli bir HTML öğesine bir özellik atamak veya mevcut özelliğin değerini değiştirmek için kullanılır.
  // `setAttribute("href","#")` ifadesi, bir HTML öğesine "href" özelliği olarak "#" değerini atamak için kullanılır.
  a.setAttribute("href","#")

  // `innerHTML` özelliği, bir HTML öğesinin içeriğini temsil eder ve öğenin içeriğini değiştirmek veya okumak için kullanılır.
  // Bu özelliğe bir metin, HTML veya diğer öğeleri içeren bir içerik atanabilir ve öğenin içeriği bu şekilde güncellenebilir.
  a.innerHTML = "<i class='fa fa-times'></i>";

  // `appendChild()` metodu, bir HTML öğesine başka bir öğe veya içerik eklemek için kullanılır. Bu metot, belirtilen öğeyi hedef öğenin sonuna ekler.
  // `li.appendChild(a);` ifadesi, bir HTML "li" öğesine "a" öğesini eklemek için kullanılır. Bu ifade, "a" öğesini "li" öğesinin içine ekler.
  li.appendChild(a);

  taskList.appendChild(li);

  input.value = "";

  // Bir olay dinleyicisi içinde kullanılarak tarayıcının varsayılan davranışını engeller.(Sayfanın yenilenmesi vb.)
  e.preventDefault();
}

function deleteItem(e){
  e.preventDefault();
  
  // Eğer olayın hedefi (e.target) "fa fa-times" sınıfına sahip bir nesne ise, belirtilen koşul doğru olur ve ilgili kod bloğu çalıştırılır.
  // Yani, bu kod parçası, belirli bir HTML elementinin belirli bir sınıfa sahip olup olmadığını kontrol eder ve buna göre bir işlem gerçekleştirir.
  if(e.target.className==="fa fa-times"){

    // parentElement, bir HTML elementinin doğrudan üst öğesine erişmek için kullanılan bir özelliktir.(1. a etiketine, 2. li etiketine ulaşıyor.)
    // remove() yöntemi, bir HTML elementini belgeden kaldırmak için kullanılan bir yöntemdir.
    // Bu kod, olayın hedefini temsil eden bir nesnenin (e.target) iki üst seviye üst öğesini belgeden kaldırır ve tamamen siler.
    e.target.parentElement.parentElement.remove();
  }
}

function deleteAllItems(e){
  e.preventDefault();

 // taskList.innerHTML = "";

      // VEYA

  // childNodes, bir HTML elementinin tüm çocuk düğümlerini içeren bir özelliktir.
  // `forEach()`, bir diziyi veya NodeList'i yineleyerek her bir eleman için belirtilen işlemi gerçekleştiren bir dizi yöntemidir.
  // Bu kod parçası, taskList'in çocuk düğümleri üzerinde forEach() yöntemini kullanarak her bir düğüm için belirtilen işlemi gerçekleştirir.
  // İşlem yapılacak her bir çocuk düğüm, forEach() yönteminin içindeki işlevin parametresi (item) olarak temsil edilir.
  taskList.childNodes.forEach(function(item){

    // Bu ifade, item parametresinin düğümün tipini (nodeType) kontrol eder ve eğer düğümün tipi 1 ise (ELEMENT_NODE), koşul doğru olur.
    if(item.nodeType==1){

      item.remove();
      
    }
  })
  // 1. ELEMENT_NODE (1): HTML veya XML belgesinde bir elementi temsil eden düğüm tipi.
  // 2. ATTRIBUTE_NODE (2): Bir elementin özniteliğini (attribute) temsil eden düğüm tipi.
  // 3. TEXT_NODE (3): HTML veya XML belgesindeki metin içeriğini temsil eden düğüm tipi.



  // NOT : Sebebini anlamadığım bir şekilde Delete All butonu doğru çalışmıyor, birkaç kere tıklamak gerekiyor.Anlayan hocalarım bana ulaşabilir...
}      