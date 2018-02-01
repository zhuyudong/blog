// http://example.com/search?q=上野宣
// SELECT * FROM bookTbl WHERE author = '上野宣' AND flag = 1;

// http://example.com/search?q=上野宣'--
// SELECT * FROM bookTbl WHERE author = '上野宣'--' AND flag = 1;  --后面的内容自动判定为注释
