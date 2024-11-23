type a = any[];
type s = string;

export class Logger {
	private s: s[];
	private f;

	constructor(n: s, f = (s: s[]) => {
		const del = "|";
		const scope = s.length === 0 ? "" : del + s.join(del);
		const date = new Date();
		return `[${date.getHours().toString().padStart(2, "0")}:${
			date.getMinutes().toString().padStart(2, "0")
		}:${date.getSeconds().toString().padStart(2, "0")}${scope}]`;
	}) {
		this.f = f;
		this.s = [n];
	}

	n = (n: s) => this.s.push(n);
	u = () => this.s.pop();

	i = (...a: a) => console.log(this.f(this.s), ...a);
	e = (...a: a) => console.error(this.f(this.s), ...a);
}

export default ((l) => {
	l.u();
	return l;
})(new Logger(""));
