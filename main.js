(() => {
    const arr = [3, 8, 4, 10];
    /*1. Phương thức every nhận 1 tham số là function (callback)
        Callback nhận 3 tham số
            1. item: phần tử của mảng
            2. index: vị trí của từng phần tử mảng
            3. arrOrigin: mảng gốc ( mảng nào chấm tới phường thức đó ví dụ: arr.every thì arrOrigin là arr)
        Phương thức every trả về kiểu boolean( true,false)
            1. True: nếu tất cả các phần tử trong mảng thỏa điều kiện định trong function(callback)
                Ví dụ: thỏa điều kiện là số chẵn
            2. False: nếu chỉ có 1 phần tử trong mảng không thỏa điều kiện trong function(callback)
                được định nghĩa trong function(callback)
    */
    Array.prototype.myEvery = function (callback) {
        for (let i = 0; i < this.length; i++) {
            const check = callback(this[i], i, this);
            if (check === false)
                return false;
        }
        return true;
    }
//////////////// Trả về kiểu dữ liệu là gì ? - nhận bao nhiêu tham số nào ? Những tham số đó dùng để làm gì ? 
    const checkEvery = arr.every(function (item, index, arrOrigin) {
        return item % 2 == 0;
    })
    console.log(checkEvery);



    /*2. Phương thức some nhận 1 tham số là function (callback)
    Callback nhận 3 tham số
        1. item: phần tử của mảng
        2. index: vị trí của từng phần tử mảng
        3. arrOrigin: mảng gốc ( mảng nào chấm tới phường thức đó ví dụ: arr.every thì arrOrigin là arr)
    Phương thức some trả về kiểu boolean( true,false)
        1. True: nếu chỉ 1 trong các phần tử trong mảng thỏa điều kiện định trong function(callback)
            Ví dụ: thỏa điều kiện là số chẵn
        2. False: nếu tất cả các phần tử trong mảng không thỏa điều kiện trong function(callback)
            được định nghĩa trong function(callback)
*/
    Array.prototype.mySome = function (callback) {
        for (let i = 0; i < this.length; i++) {
            const check = callback(this[i], i, this);
            if (check)
                return true;
        }
        return false;
    }

    const checkSome = arr.some(function (item, index, arrOrigin) {
        return item % 2 == 0;
    })
    console.log(checkSome);
    /*
        3.Phương thức foreach nhận 1 tham số là function (callback)
            Callback nhận 3 tham số
                1. item: phần tử của mảng
                2. index: vị trí của từng phần tử mảng
                3. arrOrigin: mảng gốc ( mảng nào chấm tới phường thức đó ví dụ: arr.every thì arrOrigin là arr)
            Phương thức foreach không trả về kiểu dữ liệu
    */
    Array.prototype.myForeach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this)
        }
    }

    arr.forEach((item, index, arrOrigin) => {
        if (item % 2 == 0)
            console.log(`${item} là số chẵn`)
        else
            console.log(`${item} là số lẻ`);
    })

    /*
        4. Phương thức find nhận tham số là functionn  (callback)
            Callback nhận 3 tham số
                1. item: phần tử của mảng
                2. index: vị trí của từng phần tử mảng
                3. arrOrigin: mảng gốc ( mảng nào chấm tới phường thức đó ví dụ: arr.every thì arrOrigin là arr)
            Phương thức find trả về phần tử đầu tiên thỏa điều kiện trong phần định nghĩa callback
            Ví dụ thỏa điều kiện là số chẵn
    */
    Array.prototype.myFind = function (callback) {
        for (let i = 0; i < this.length; i++) {
            const check = callback(this[i], i, this);
            if (check)
                return this[i]
        }
    }
    const resultFind = arr.myFind((item, index, arrOrigin) => {
        return item % 2 == 0
    })
    console.log(resultFind);
    /*
           5. Phương thức filter nhận tham số là functionn  (callback)
               Callback nhận 3 tham số
                   1. item: phần tử của mảng
                   2. index: vị trí của từng phần tử mảng
                   3. arrOrigin: mảng gốc ( mảng nào chấm tới phường thức đó ví dụ: arr.filter thì arrOrigin là arr)
               Phương thức filter trả về mảng các phần tử thỏa điều kiện trong phần định nghĩa callback
               Ví dụ thỏa điều kiện là số chẵn
       */
    Array.prototype.myFilter = function (callback) {
        const arr = [];
        for (let i = 0; i < this.length; i++) {
            const check = callback(this[i], i, this);
            if (check)
                arr.push(this[i]);
        }
        return arr;
    }
    const resultFilter = arr.myFilter((item, index, arrOrigin) => {
        return item % 2 == 0
    })
    console.log(resultFilter);


    /*
        4. Phương thức map nhận tham số là functionn (callback)
            Callback nhận 3 tham số
                1. item: phần tử của mảng
                2. index: vị trí của từng phần tử mảng
                3. arrOrigin: mảng gốc ( mảng nào chấm tới phường thức đó ví dụ: arr.every thì arrOrigin là arr)
            Phương thức map trả về mảng mới có số lượng phần tử như số lượng phần tử mảng gốc
            mảng mới chứa phần tử được trả về trong callback
     */
    Array.prototype.myMap = function (callback) {
        const arr = [];
        for (let i = 0; i < this.length; i++) {
            const value = callback(this[i], i, this);
            arr.push(value)
        }
        return arr;
    }
    const courses = [
        {
            id: 1,
            name: 'Html,css',
            price: 50,
            description: 'Mô tả html,css',
        },
        {
            id: 2,
            name: 'JavaScript',
            price: 0,
            description: 'Mô tả JavaScript'
        },
        {
            id: 3,
            name: 'ReactJS',
            price: 100,
            description: 'Mô tả ReactJS'
        },
    ];
    const resultMap = courses.myMap((course, index, arrOrgin) => {
        if (course.id == 1)
            course.quantity = 10;
        else
            if (course.id == 2)
                course.quantity = 20;
            else
                course.quantity = 30;
        return course;

    })
    console.log(resultMap);

    /*
        6. Phương thức reduce nhận 2 tham số:
            1. Callback
                Callback nhận 4 tham số
                1. storeVariable: biến tích trữ (nếu có truyền giá trị khởi tạo nó chạy arr.length lần, 
                    nếu không truyền giá trị khởi tạo nó lấy phần tử đầu tiên của mảng làm biến tích trữ và chạy arr.length-1 lần)
                2. item: phần tử của mảng
                3. index: vị trí của từng phần tử mảng
                4. arrOrigin: mảng gốc
            2.InitValue: giá trị khởi tạo
     */
    Array.prototype.myReduce = function (callback, initValue) {

        let total;

        let i = 0;
        if (typeof initValue !== 'undefined') {
            total = initValue;
        }
        else {
            total = this[0];
            i = 1;
        }
        for (i; i < this.length; i++) {
            total = callback(total, this[i], i, this);
        }
        return total;

    }
    const totalPrice = courses.reduce((total, course, index, arrOrgin) => {
        return total + course.price
    }, 0);

    console.log(arr.myReduce((total, item) => {
        return total + item;
    }));

})()

/////các hàm về String
function run() {
	var str = "JavaScript";
	str.charAt(0); // returns "J"

	str.charAt(str.length-1); // returns "t"

	'ABC'.charCodeAt(0); // returns 65

	"Java".concat("Script"); // returns "JavaScript"

	"JavaScript".indexOf("J"); // returns 0
	"JavaScript".indexOf("X"); // returns -1

	'canal'.lastIndexOf('a'); // returns 3
	'canal'.lastIndexOf('x'); // returns -1

	"Ab".replace('b', 'a'); // returns Aa

	"Mozilla".substr(1, 2); // returns "oz"
	"Mozilla".substr(0, 4); // returns "Mozi"

	"Mozilla".substring(1, 3); // returns "oz"

	var str = 'The quick brown fox jumps over the lazy dog.';

	str.slice(31); // returns "the lazy dog."
	str.slice(4, 19); // returns "quick brown fox"
	str.slice(-4);// returns "dog."

	"Abc".toLowerCase(); // returns "abc"

	"Abc".toUpperCase(); // returns "ABC"

	"The quick brown fox".split(' '); // returns ['The', 'quick', 'brown', 'fox']
	"11,22".split(','); // returns ['11', '22']

	str = 'To be, or not to be, that is the question.';

	str.includes('To be'); 	// true
	str.includes('question');    // true
	str.includes('nonexistent'); // false
	str.includes('To be', 1);	// false
	str.includes('TO BE');	// false
	str.includes('');	// true
	console.log("done");
}