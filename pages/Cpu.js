import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';

export default function Cpu() {
  const [inEditMode, SetInEditMode] = useState(false);
  const [id, SetId] = useState(0);
  const [model, SetModel] = useState('');
  const [clock, SetClock] = useState('');
  const [cache, SetCache] = useState('');
  const [specs, SetSpecs] = useState('');
  const [selectedRow, setSelectedRow] = useState({});
  const router = useRouter();
  const items = {
    data: {
      item: {
        items: [
          {
            id: '4',
            model: 'Core™ i5-3450K Proce',
            clock: '3GHz',
            cache: '1',
            specs: 'Intel® Core™ i5-3450K Processor@3GHz',
          },
          {
            id: '10070',
            model: 'Intel Corei3',
            clock: '',
            cache: '',
            specs: '',
          },
          {
            id: '10099',
            model: 'Core™ i7-4790K Processor',
            clock: '4GHz',
            cache: '',
            specs: 'Intel® Core™ i7-4790K Processor@4GHz',
          },
          {
            id: '10103',
            model: 'Intel® Pentium® 4',
            clock: '3.00GHz',
            cache: '',
            specs: '',
          },
          { id: '10104', model: '', clock: '3.00GHz', cache: '', specs: '' },
          {
            id: '10105',
            model: 'core',
            clock: '3GHz',
            cache: '',
            specs: 'AMD Athlon 64 X2 Dual core 3GH',
          },
          {
            id: '10106',
            model: 'core',
            clock: '',
            cache: '',
            specs: 'Intel Pentium Dual core',
          },
          {
            id: '10107',
            model: 'AMD Athlon II X2 250',
            clock: '3GHz',
            cache: '',
            specs: '',
          },
          { id: '10108', model: '', clock: '3.30GHz', cache: '', specs: '' },
          { id: '10110', model: '', clock: '2.50GHz', cache: '', specs: '' },
          {
            id: '10111',
            model: 'AMD Semprone ™  3000',
            clock: '1.6GHz',
            cache: '',
            specs: '',
          },
          { id: '10185', model: '', clock: '3.00GHz', cache: '', specs: '' },
          {
            id: '10189',
            model: 'core2 extreme Q6850',
            clock: '',
            cache: '',
            specs: '',
          },
          {
            id: '10214',
            model: 'AMD Phenom II X4 965 Black Edition',
            clock: '',
            cache: '',
            specs: '',
          },
          { id: '10218', model: '', clock: '2.6GHz', cache: '', specs: '' },
          { id: '10221', model: '', clock: '3.2GHz', cache: '', specs: '' },
          { id: '10246', model: '', clock: '3GHz', cache: '', specs: '' },
          {
            id: '10247',
            model: 'Intel® Pentium®',
            clock: '2.8GHz',
            cache: '',
            specs: '4 Processor @2.80A',
          },
          {
            id: '10248',
            model: 'Intel® Celeron® D Processor 335',
            clock: '',
            cache: '',
            specs: 'Intel Pentium Dual core',
          },
          {
            id: '10249',
            model: 'AMD Athlon II X2 250',
            clock: '3GHz',
            cache: '',
            specs: 'Intel Pentium Dual core',
          },
          {
            id: '10250',
            model: 'Intel® Celeron® Processor',
            clock: '2.8GHz',
            cache: '',
            specs: '',
          },
          {
            id: '10251',
            model: 'Intel® Celeron® Processor',
            clock: '2.8GHz',
            cache: '',
            specs: '',
          },
          { id: '10252', model: '', clock: '3.00GHz', cache: '', specs: '' },
          { id: '10253', model: '', clock: '3.4GHz', cache: '', specs: '' },
          {
            id: '10254',
            model: 'Intel® Celeron® D Processor 335/335J',
            clock: '3.4GHz',
            cache: '',
            specs: '',
          },
          {
            id: '10255',
            model: 'Core2 Quad Q8300 @ 2',
            clock: '2.5GHz',
            cache: '',
            specs: '',
          },
          { id: '10256', model: '', clock: '2.66GHz', cache: '', specs: '' },
          { id: '10257', model: '', clock: '3.06GHz', cache: '', specs: '' },
          { id: '10258', model: '', clock: '2.88GHz', cache: '', specs: '' },
          { id: '10259', model: '', clock: '2.40GHz', cache: '', specs: '' },
          {
            id: '10260',
            model: 'Intel® Pentium®',
            clock: '2.8GHz',
            cache: '',
            specs: '',
          },
          {
            id: '10263',
            model: 'Intel® Pentium® G4400',
            clock: '3.3GHz',
            cache: '',
            specs: '',
          },
          {
            id: '20299',
            model: 'Core™2 Duo Processor',
            clock: '2.66GHz',
            cache: '',
            specs: '',
          },
          {
            id: '20300',
            model: 'Core(TM) i3-7100',
            clock: '3.9GHz',
            cache: '',
            specs: '',
          },
          {
            id: '20302',
            model: 'AMD Phenom II X2 555',
            clock: '3.2GHz',
            cache: '',
            specs: '',
          },
          { id: '20318', model: '', clock: '2.6GHz', cache: '', specs: '' },
          {
            id: '30316',
            model: 'Core™ i3-3240 Processor',
            clock: '3.40GHz',
            cache: '',
            specs: '',
          },
          { id: '30318', model: '', clock: '2.9GHz', cache: '', specs: '' },
          {
            id: '30322',
            model: 'Core(TM)2 Quad CPU Q8300',
            clock: '2.5GHz',
            cache: '',
            specs: '',
          },
          { id: '30327', model: '', clock: '1.66GHz', cache: '', specs: '' },
          {
            id: '30328',
            model: 'Core™ i3-3217U Processor',
            clock: '1.8GHz',
            cache: '',
            specs: '',
          },
          {
            id: '30329',
            model: 'Core™ i3-2100 Processor',
            clock: '3.1GHz',
            cache: '',
            specs: '',
          },
          {
            id: '30333',
            model: 'Core™ i5-6400 Processor',
            clock: '3.3GHz',
            cache: '',
            specs: '',
          },
          {
            id: '30346',
            model: 'Core™ i3-8100 Processor',
            clock: '3.6GHz',
            cache: '',
            specs: '',
          },
          {
            id: '30348',
            model: 'Core™ i5-3350K Processor',
            clock: '3.1GHz',
            cache: '',
            specs: '',
          },
          {
            id: '30350',
            model: 'Core(TM)2 Quad CPU 6600',
            clock: '2.4GHz',
            cache: '',
            specs: '',
          },
          { id: '30352', model: '', clock: '1.8GHz', cache: '', specs: '' },
          {
            id: '40373',
            model: 'Core™ i3-4170',
            clock: '3.7GHz',
            cache: '',
            specs: '',
          },
          {
            id: '40400',
            model: 'Intel® Pentium® Processor',
            clock: '',
            cache: '',
            specs: 'E2160',
          },
          {
            id: '40401',
            model: 'Intel Core-3890',
            clock: '2.40GHz',
            cache: '',
            specs: '',
          },
          {
            id: '40411',
            model: 'Core i5-10400',
            clock: '',
            cache: '',
            specs: '',
          },
          {
            id: '40412',
            model: 'Intel Coffee Lake Core i3-10100',
            clock: '2.40GHz',
            cache: '',
            specs: '',
          },
        ],
      },
      pageCount: '5' /* 51 */,
    },
  };

  /*
  SELECT [id]
        ,[model]
        ,[clock]
        ,[cache]
        ,[specs]
        ,[createAt]
        ,[updatedAt]
    FROM [SAMA2].[dbo].[CPU]
  */
  const colDefs = [
    {
      headerName: 'مدل',
      field: 'model',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'سرعت',
      field: 'clock',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'ظرفیت کش',
      field: 'cache',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'خصیصه ها',
      field: 'specs',
      className: 'border border-slate-900',
    },
    {
      headerName: 'ویرایش',
      field: 'edit',
      className: 'border border-slate-900',
    },
  ];

  const handleUsersRowData = (qry) => {
    if (!qry.data) return [];
    if (qry.data.item.pageCount !== pageCount)
      setPageCount(qry.data.item.pageCount);
    const rowdata = qry.data.item.items.map((row) => ({
      ...row,
      id: row['id'],
      model: row['model'],
      clock: row['clock'],
      cache: row['cache'],
      specs: row['specs'],
      edit: (
        <div
          className='flex items-center justify-center border-none cursor-pointer bg-none'
          onClick={() => {
            SetInEditMode(true);
            setFormStates(row);
          }}
        >
          <img className='editImg' alt='' src='/images/edit.svg' width='30px' />
        </div>
      ),
    }));
    return rowdata;
  };
  const [pageCount, setPageCount] = useState(1);

  let pageIndex = 1;

  function setFormStates(row) {
    SetId(row['id'] ? row['id'] : 0);
    SetModel(row['model'] ? row['model'] : '');
    SetClock(row['clock'] ? row['clock'] : '');
    SetCache(row['cache'] ? row['cache'] : '');
    SetSpecs(row['specs'] ? row['specs'] : '');
    setSelectedRow(row);
  }

  return (
    <div className='max-w-4xl'>
      <div style={{ direction: 'rtl' }}>
        <p className='text-slate-50'>
          معرفی انواع <a className='text-2xl'>اسکنر</a>
        </p>
      </div>
      <div className='grid grid-cols-4 shrink-0'>
        <button
          className='col-start-auto 
            p-1 md:p-1.5
            m-1 md:m-2
            text-xs md:text-sm
            font-semibold text-white rounded-lg bg-gradient-to-r from-green-300 to-green-500 hover:from-green-400 hover:to-green-600'
        >
          افزودن
        </button>
        <button
          className='col-start-2 
            p-1 md:p-1.5
            m-1 md:m-2
            text-xs md:text-sm
            font-semibold text-white rounded-lg bg-gradient-to-r from-sky-300 to-sky-500 hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-600'
        >
          تنظیمات
        </button>
        <button
          onClick={() => router.back()}
          className='col-start-3 
            p-1 md:p-1.5
            m-1 md:m-2
            text-xs md:text-sm
            font-semibold text-white rounded-lg bg-gradient-to-r from-slate-300 to-slate-500 hover:from-green-400 hover:to-green-600'
        >
          بازگشت
        </button>
      </div>
      <RespTab data={handleUsersRowData(items)} colDefs={colDefs} />
    </div>
  );
}
