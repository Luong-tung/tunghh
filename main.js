var khoaHoc = [
    {
        id = 1,
        name = 'Javascript',
        gia = 5
    },
    {
        id = 2,
        name = 'C++',
        gia = 7
    },
    {
        id = 3,
        name = 'Python',
        gia = 9
    },
    {
        id = 4,
        name = 'Html+css',
        gia = 3
    },
    {
        id = 5,
        name = 'Java',
        gia = 6
    }
]
function kiemtra(thongtin){
    return {
        id: thongtin.id,
        name: `đây là khóa học ${thongtin.name}`,
        gia: thongtin.gia,
        time: '2 tháng'
    }
}
var newkhoaHoc = khoaHoc.map(kiemtra);
alert(newkhoaHoc)