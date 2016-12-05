export class Supplier {
  constructor(
    private id: number,
    public company: string,
    public industry: string,
    public agency: string,
    public type: string,
    public state?: string,
    public zip?: string,
    public county?: string,
    public value?: number,
  ) { }
}
