const convertToString = (nums) => {
    return nums
      .map((i) => "0123456789ABCD"[i])
      .sort()
      .join("");
  };
  
  const charsToUtf8 = (nums) => {
    var s = convertToString(nums);
    console.log(s);
    var r = s.replace(/\s+/g, "").replace(/[0-9a-f]{4}/g, "%u$&");
    console.log(r);
    const d = decodeURIComponent(r);
    console.log(d);
  };
  
  // charsToUtf8([5, 13, 1, 5]);
  
  // console.log(escape(decodeURI('㕞')).slice(2) == "355E")
  const unsolvables = [
    1111, 1112, 1113, 1114, 1115, 1116, 1117, 1119, 1122, 1123, 1124, 1125, 1133,
    1159, 1167, 1177, 1178, 1179, 1189, 1199, 1222, 1223, 1299, 1355, 1499, 1557,
    1558, 1577, 1667, 1677, 1678, 1777, 1778, 1899, 1999, 2222, 2226, 2279, 2299,
    2334, 2555, 2556, 2599, 2677, 2777, 2779, 2799, 2999, 3358, 3388, 3467, 3488,
    3555, 3577, 4459, 4466, 4467, 4499, 4779, 4999, 5557, 5558, 5569, 5579, 5777,
    5778, 5799, 5899, 5999, 6667, 6677, 6678, 6699, 6777, 6778, 6779, 6788, 6999,
    7777, 7778, 7779, 7788, 7789, 7799, 7888, 7899, 7999, 8888, 8889, 8899, 8999,
    9999,
  ];
  const unsolvableString = unsolvables
    .map((a) => a + 14500)
    .map((a) => String.fromCharCode(a));
  // console.log(unsolvableString.join(""));
  
  const asd = (nums) => {
    const a =
      "㳻㳼㳽㳾㳿㴀㴁㴃㴆㴇㴈㴉㴑㴫㴳㴽㴾㴿㵉㵓㵪㵫㶷㷯㹿㺹㺺㻍㼧㼱㼲㾕㾖䀏䁳䅒䅖䆋䆟䇂䊟䊠䋋䌙䍽䍿䎓䑛䗂䗠䘯䙄䚇䚝䨏䨖䨗䨷䭏䰫乙乚乥乯伵伶佋侯倓劯効劺勏匝匞匟匨叻圅圆圇圐圑圛坴坿埣孜孝孧寋徳";
      return a.includes(String.fromCharCode(nums + 14500));
  };
  
  console.log(asd(7788))