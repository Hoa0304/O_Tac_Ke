var iconmenu = document.getElementById('iconmenu');
var menuan = document.querySelector('.ulheader'); 
    var linkTrangChu = document.querySelector(" a[href='a']");
    linkTrangChu.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt khi click vào thẻ "a"
        var iframe = document.querySelector("#maincontent iframe");
        iframe.setAttribute("src", "home.html");
        menuan.classList.toggle("active");
    });
   
    var linkSanPham = document.querySelector(" a[href='c']");
    linkSanPham.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt khi click vào thẻ "a"
        var iframe = document.querySelector("#maincontent iframe");
        iframe.setAttribute("src", "product.html");
        menuan.classList.toggle("active");
    });
    var linkSanPhams = document.querySelector(" a[href='e']");
    linkSanPhams.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của trình duyệt khi click vào thẻ "a"
        var iframe = document.querySelector("#maincontent iframe");
        iframe.setAttribute("src", "vip.html");
        menuan.classList.toggle("active");
    });
    var spham = document.querySelector()
    const mau1x = document.querySelector('.mau1');
    const mau2 = document.querySelector('.mau2');
    const mau3 = document.querySelector('.mau3');
    const mau4 = document.querySelector('.mau4');
    const mau5 = document.querySelector('.mau5');
    const mau6 = document.querySelector('.mau6');
    const mau7 = document.querySelector('.mau7');
    const mau8 = document.querySelector('.mau8');
    const mau9 = document.querySelector('.mau9');
    const img = document.querySelector('.hinhanh img');

    mau1x.addEventListener('click', function(e) {
        img.setAttribute("src", "https://cf.shopee.vn/file/ba09e3d2d5b67f2fc03af16289c77fa2");
        alert("eldsaf");
        console.log("sadfsdf");
    });
    mau2.addEventListener('click', function(e) {
        img.setAttribute("src", "https://www.mothercare.com.vn/media/catalog/product/cache/6a1e35110684b984bc2c07f0b55088b8/n/a/na451_1_1_1.webp");
    });
    
