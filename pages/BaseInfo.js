import Link from 'next/link';
// import { useRouter } from 'next/router';

/* icons from https://www.svgrepo.com/vectors/
 */
const BasicInfo = [
  { name: 'کیس سیستم', Icon: '/images/Case.svg', BaseLink: '/Case' },
  { name: 'CPU', Icon: '/images/Cpu.svg', BaseLink: '/Cpu' },
  {
    name: 'واحد  های سرویس گیرنده',
    Icon: '/images/Departments.svg',
    BaseLink: '/Departments',
  },
  { name: 'هارد درایو', Icon: '/images/Hdd.svg', BaseLink: '/Hdd' },
  { name: 'لپ تاپ', Icon: '/images/Laptop.svg', BaseLink: '/Laptop' },
  { name: 'مونیتور', Icon: '/images/Monitor.svg', BaseLink: '/Monitor' },
  {
    name: 'مادر برد',
    Icon: '/images/Motherboard.svg',
    BaseLink: '/Motherboard',
  },
  { name: 'شبکه', Icon: '/images/Network.svg', BaseLink: '/Network' },
  {
    name: 'ارتبات شبکه ای',
    Icon: '/images/Domain.svg',
    BaseLink: '/',
  },
  { name: 'سیسستم عامل', Icon: '/images/Os.svg', BaseLink: '/Os' },
  { name: 'استانها', Icon: '/images/Provinces.svg', BaseLink: '/Province' },
  {
    name: 'منبع تفذیه',
    Icon: '/images/PowerSupply.svg',
    BaseLink: '/PowerSupply',
  },
  { name: 'چاپگر', Icon: '/images/Printer.svg', BaseLink: '/Printer' },
  { name: 'حافظه', Icon: '/images/Ram.svg', BaseLink: '/Ram' },
  { name: 'اسکنر', Icon: '/images/Scanner.svg', BaseLink: '/Scanner' },
  { name: 'تلفن', Icon: '/images/Telphone.svg', BaseLink: '/Telephone' },
  { name: 'کاربران', Icon: '/images/Users.svg', BaseLink: '/User' },
  {
    name: 'سطوح کاربری',
    Icon: '/images/AccessLevel.svg',
    BaseLink: '/UserLevel',
  },
];
// console.table(BasicInfo);
export default function BaseInfo() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly'>
      {BasicInfo.map(({ name, Icon, BaseLink }) => (
        <p className='p-2 m-4 rounded-md bg-slate-100'>
          <Link href={BaseLink}>
            <a>
              <img className='w-24 h-24 rounded-sx' src={Icon} alt='' />{' '}
              <p className='text-sm font-medium text-gray-900 w-25'>{name}</p>
            </a>
          </Link>
        </p>
      ))}
    </div>
  );
}

/*
 SELECT t.TABLE_NAME 
FROM INFORMATION_SCHEMA.TABLES t
WHERE t.TABLE_TYPE = 'BASE TABLE'
and t.TABLE_NAME not like 'Tbl%'

or

SELECT t.name FROM Sys.Tables t
WHERE t.NAME not like 'Tbl%'

or

SELECT s.name
FROM sysobjects s
WHERE s.xtype = 'U'
and s.name not like 'Tbl%'

Below is a list of other object types as well:

AF: Aggregate function (CLR)
C: CHECK constraint
D: Default or DEFAULT constraint
F: FOREIGN KEY constraint
L: Log
FN: Scalar function
FS: Assembly (CLR) scalar-function
FT: Assembly (CLR) table-valued function
IF: In-lined table-function
IT: Internal table
P: Stored procedure
PC: Assembly (CLR) stored-procedure
PK: PRIMARY KEY constraint (type is K)
RF: Replication filter stored procedure
S: System table
SN: Synonym
SQ: Service queue
TA: Assembly (CLR) DML trigger
TF: Table function
TR: SQL DML Trigger
TT: Table type
U: User table
UQ: UNIQUE constraint (type is K)
V: View
X: Extended stored procedure

*/
