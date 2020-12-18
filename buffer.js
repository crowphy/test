const data = '00000bc30000000000ea0400e60865108a8fa1a30f1a0743726f777068792085869fa30f2a0ce6b58be8af95e698b5e7a7b030f1a4ba3438f1a4ba3440930d48045095e3a58105580478fcffd3018a016668747470733a2f2f6e6f777069632e6774696d672e636f6d2f68795f706572736f6e616c2f653435366133653635663833323966656166356336396433646237613235616334656166613637633561656461626236346231383631613766323363366163332f900100980185869fa30fa2010ce6b58be8af95e698b5e7a7b0b20120303339453945463944314537313139363039314341364645423032414630454400';

const buf = Buffer.from(data, 'hex');

// 占位长度	32	32	16	8	16	size
// 占位类型	16	int	short	Byte	short	buffer
// 含义	dwAppId	sign	len	type	size	MSG

// console.log('buf', buf);
// console.log('buf type:', buf.slice(0, 4).toString('hex'));
// console.log('buf len:', buf.readUIntBE(8, 2));
// console.log('buf type:', buf.readUIntBE(10, 1).toString(16));
// console.log('buf size:', buf.readUIntBE(11, 2));
// console.log('buf size:', buf.slice(13, 234).toString());
// console.log('buf size:', buf.toString());

console.log(Buffer.from('995be64694d1237ed2e65be24877b865d3ac31c64bfdfae8823f504b5ebef3b6889153a05365d771', 'hex').toString('utf-16le'));
