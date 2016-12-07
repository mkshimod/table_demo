export class ServiceProviderDetail {
  constructor(
    public companyName: string,
    public HawaiiAddr: string,
    public HQAddr: string,
    public ContUSRev: number,
    public HIRev: number,
  ) { }
}

export const SAMPLE_SERVICEPROVIDERDETAIL: ServiceProviderDetail =
  new ServiceProviderDetail('Raytheon', '2828 Paa St # 3095, Honolulu, HI 96819', '870 Winter Street, Waltham, MA 02451-1449',
  19000000, 2840000);
