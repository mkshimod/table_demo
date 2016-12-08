export class Supplier {
  supplierName: string,
  subk: number,
  desc: string
};

export class Contract {
  id: string,
  cust: string,
  value: {
    total: number,
    hawaii: number
  },
  employed: number,
  suppliers: Supplier[]
};

export class Address {
  street: string,
  city: string,
  state: string,
  zip: string,
  hq: boolean
};

export class CompanyData {
  id: number,
  name: string,
  address: Address[],
  revenue: {
    hawaii: number,
    conus: number
  },
  contracts: Contract[]
};


export const SampleRaytheonData: CompanyData = {
  id: 12345,
  name: 'Raytheon',
  address: [
    {
      street: '870 Winter Street',
      city: 'Waltham',
      state: 'MA',
      zip: '02451-1449',
      hq: false
    },
    {
      street: '200 El Segundo Blvd',
      city: 'El Segundo',
      state: 'CA',
      zip: '90245',
      hq: false
    },
    {
      street: '1801 Hughes Dr',
      city: 'Fullerton',
      state: 'CA',
      zip: '92833',
      hq: true
    }
  ],
  revenue: {
    hawaii: 6100000,
    conus: 284000000000
  },
  contracts: [
    {
      id: 'DCGS-M',
      cust: 'COMPACTFLT',
      value: {
        total: 360000000,
        hawaii: 250000000
      },
      employed: 10,
      suppliers: [
        {
          supplierName: 'ManTech',
          subk: 94300,
          desc: 'SysAdmin'
        },
        {
          supplierName: 'Vertis',
          subk: 25000,
          desc: 'Accounting'
        }
      ]
    }


  ]
}
