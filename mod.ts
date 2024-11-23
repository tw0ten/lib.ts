type a = any[];
type s = string;

export class Logger {
	private s: s[];
	private i;

	constructor(n: s, i = (s: s[]) => {
		const del = "|";
		const scope = s.length === 0 ? "" : del + s.join(del);
		const date = new Date();
		return `[${date.getHours().toString().padStart(2, "0")}:${
			date.getMinutes().toString().padStart(2, "0")
		}:${date.getSeconds().toString().padStart(2, "0")}${scope}]`;
	}) {
		this.i = i;
		this.s = [n];
	}

	push = (n: s) => this.s.push(n);
	pop = () => this.s.pop();

	log = (...a: a) => console.log(this.i(this.s), ...a);
	err = (...a: a) => console.error(this.i(this.s), ...a);
}

export default ((l) => {
	l.pop();
	return l;
})(new Logger(""));
