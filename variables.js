function variables_print()
{
	let str1="文字列";		// 変数は型を指定せずにletで宣言するだけ
	let str2="string";
	let number1=20;
	let number2=10;

	const number3=11;		// const宣言は定数(代入できない)

	number1++;				// 数値(に人には見える)値をインクリメント

//	number3=14;				// 定数値を際代入するとエラー

//	str1++;					// 文字列をインクリメント
	let add = number1+number2;	// 二つの数値を足し合わせる
	let string=str1+str2;		// 2つの文字列を足し合わせる
	let mix = str1+number2;		// 文字列と数値を足し合わせる
	alert(number1);
}
