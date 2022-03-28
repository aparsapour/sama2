import Link from 'next/link';
import { useRouter } from 'next/router';

/* icons from https://www.svgrepo.com/vectors/
 */
const BasicInfo = [
  { name: 'کیس سیستم', Icon: '/images/Case.svg', BaseLink: '/' },
  { name: 'CPU', Icon: '/images/Cpu.svg', BaseLink: '/' },
  {
    name: 'واحد  های سرویس گیرنده',
    Icon: '/images/Departments.svg',
    BaseLink: '/',
  },
  { name: 'هارد درایو', Icon: '/images/Hdd.svg', BaseLink: '/' },
  { name: 'لپ تاپ', Icon: '/images/Laptop.svg', BaseLink: '/' },
  { name: 'مونیتور', Icon: '/images/Monitor.svg', BaseLink: '/' },
  { name: 'مادر برد', Icon: '/images/Motherboard.svg', BaseLink: '/' },
  { name: 'شبکه', Icon: '/images/Network.svg', BaseLink: '/' },
  {
    name: 'ارتبات شبکه ای',
    Icon: '/images/Domain.svg',
    BaseLink: '/',
  },
  { name: 'سیسستم عامل', Icon: '/images/Os.svg', BaseLink: '/' },
  { name: 'استانها', Icon: '/images/Provinces.svg', BaseLink: '/' },
  { name: 'منبع تفذیه', Icon: '/images/PowerSupply.svg', BaseLink: '/' },
  { name: 'چاپگر', Icon: '/images/Printer.svg', BaseLink: '/' },
  { name: 'حافظه', Icon: '/images/Ram.svg', BaseLink: '/' },
  { name: 'اسکنر', Icon: '/images/Scanner.svg', BaseLink: '/' },
  { name: 'تلفن', Icon: '/images/Telphone.svg', BaseLink: '/' },
  { name: 'کاربران', Icon: '/images/Users.svg', BaseLink: '/' },
  { name: 'سطوح کاربری', Icon: '/images/AccessLevel.svg', BaseLink: '/' },
];
console.table(BasicInfo);
export default function BaseInfo() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly'>
      {BasicInfo.map(({ name, Icon, BaseLink }) => (
        <p className='p-2 m-4 bg-slate-400'>
          {/* <Link href={BaseLink}>  </Link>
          <div className={`"flex p-2 ml-3 rounded cursor-pointer bg-blue-200 hover:bg-blue-400"`} >
          </div> */}
          <img className='w-24 h-24 rounded-sx' src={Icon} alt='' />
          <Link href={BaseLink}>
            <p className='text-sm font-medium text-gray-900 w-25'>{name}</p>
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
