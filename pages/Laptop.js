import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';

export default function Laptop() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();
  const items = {
    data: {
      item: {
        items: [
          { id: 4, model: 'Intel® Core™ i5-3450K Processor@3GHz', specs: '' },
          { id: 10070, model: 'Intel Corei3', specs: '' },
          {
            id: 10099,
            model: 'Intel® Core™ i7-4790K Processor@4GHz',
            specs: '',
          },
          { id: 10103, model: 'Intel® Pentium® 4, 3.00 GHz', specs: '' },
          {
            id: 10104,
            model: 'Intel® Pentium® Processor G2030 @ 3.00GHz',
            specs: '',
          },
          { id: 10105, model: 'AMD Athlon 64 X2 Dual core 3GH', specs: '' },
          { id: 10106, model: 'Intel Pentium Dual core', specs: '' },
          { id: 10107, model: 'AMD Athlon II X2 250 / 3 GHz', specs: '' },
          {
            id: 10108,
            model: 'Intel® Pentium® Processor G3260 @ 3.30GHz',
            specs: '',
          },
          {
            id: 10110,
            model: 'Intel® Pentium® Processor E5200 @2.50GHz',
            specs: '',
          },
          { id: 10111, model: 'AMD Semprone ™  3000/ 1.6 GHz', specs: '' },
          {
            id: 10185,
            model: 'Intel® Pentium® Processor E5700 @3.00GHz',
            specs: '',
          },
          { id: 10189, model: 'Intel core2 extreme Q6850', specs: '' },
          { id: 10214, model: 'AMD Phenom II X4 965 Black Edition', specs: '' },
          {
            id: 10218,
            model: 'Intel® Pentium® Processor E5300 @ 2.6GHz',
            specs: '',
          },
          { id: 10221, model: 'Intel Pentium G3250 @ 3.20GHz', specs: '' },
          {
            id: 10246,
            model: 'Intel® Pentium® 4 Processor 630 @3GHz',
            specs: '',
          },
          {
            id: 10247,
            model: 'Intel® Pentium® 4 Processor @2.80A GHz',
            specs: '',
          },
          { id: 10248, model: 'Intel® Celeron® D Processor 335 ', specs: '' },
          { id: 10249, model: 'AMD Athlon II X2 250 / 3 GHz ', specs: '' },
          {
            id: 10250,
            model: 'Intel® Celeron® Processor@ 2.80 GHz',
            specs: '',
          },
          {
            id: 10251,
            model: 'Intel® Celeron® Processor @2.80 GHz',
            specs: '',
          },
          {
            id: 10252,
            model: 'Intel® Pentium® 4 Processor 631 @ 3.00GHz',
            specs: '',
          },
          {
            id: 10253,
            model: 'Intel® Pentium® 4 Processor 650 @3.4GHz',
            specs: '',
          },
          {
            id: 10254,
            model: 'Intel® Celeron® D Processor 335/335J',
            specs: '',
          },
          { id: 10255, model: 'Intel Core2 Quad Q8300 @ 2.50GHz', specs: '' },
          {
            id: 10256,
            model: 'Intel® Celeron® D Processor 331 @ 2.66GHz',
            specs: '',
          },
          {
            id: 10257,
            model: 'Intel® Pentium® 4 Processor 524 @ 3.06GHz',
            specs: '',
          },
          {
            id: 10258,
            model: 'Intel® Pentium® D Processor 820 @ 2.88GHz',
            specs: '',
          },
          {
            id: 10259,
            model: 'Intel® Celeron® Processor E3200 @ 2.40GHz',
            specs: '',
          },
          { id: 10260, model: 'Intel® Pentium® 2.80 GHz', specs: '' },
          { id: 10263, model: 'Intel® Pentium® G4400, 3.30 GHz', specs: '' },
          {
            id: 20299,
            model: 'Intel® Core™2 Duo Processor 2.66 GHz',
            specs: '',
          },
          {
            id: 20300,
            model: 'Intel(R) Core(TM) i3-7100 CPU @ 3.90GHz',
            specs: '',
          },
          {
            id: 20302,
            model: 'AMD Phenom II X2 555 3.2 GHz processor',
            specs: '',
          },
          {
            id: 20318,
            model: ' Intel® Pentium® Processor G620@2.6GHz',
            specs: '',
          },
          {
            id: 30316,
            model: 'Intel® Core™ i3-3240 Processor 3.40 GHz',
            specs: '',
          },
          {
            id: 30318,
            model: 'Intel® Pentium® Processor G2020 @ 2.90GHz',
            specs: '',
          },
          {
            id: 30322,
            model: 'Intel® Core(TM)2 Quad CPU Q8300@ 2.50GHz',
            specs: '',
          },
          {
            id: 30327,
            model: 'Intel Atom® Processor N455@ 1.66GHz',
            specs: '',
          },
          {
            id: 30328,
            model: 'Intel® Core™ i3-3217U Processor @1.80 GHz',
            specs: '',
          },
          {
            id: 30329,
            model: 'Intel® Core™ i3-2100 Processor @ 3.10GHz',
            specs: '',
          },
          {
            id: 30333,
            model: 'Intel® Core™ i5-6400 Processor  3.30 GHz',
            specs: '',
          },
          {
            id: 30346,
            model: 'Intel® Core™ i3-8100 Processor 3.60 GHz',
            specs: '',
          },
          {
            id: 30348,
            model: 'Intel® Core™ i5-3350K Processor@3.1GHz	',
            specs: '',
          },
          {
            id: 30350,
            model: 'Intel® Core(TM)2 Quad CPU Q6600@ 2.40GHz',
            specs: '',
          },
          {
            id: 30352,
            model: 'AMD Athlon (tm) 64 Processor 3000+ @ 1.8GHz',
            specs: '',
          },
          {
            id: 40373,
            model: 'Intel® Core™ i3-4170 CPU @ 3.70 GHz',
            specs: '',
          },
          { id: 40400, model: 'Intel® Pentium® Processor E2160', specs: '' },
          { id: 40401, model: 'Intel Core-3890', specs: '' },
          { id: 40411, model: 'Intel Comet Lake Core i5-10400 CPU', specs: '' },
          { id: 40412, model: 'Intel Coffee Lake Core i3-10100', specs: '' },
        ],
      },
      pageCount: '5' /* 51 */,
    },
  };

  const colDefs = [
    {
      headerName: 'شناسه',
      field: 'id',
      className: 'border border-slate-900',
    },
    {
      headerName: 'مدل',
      field: 'model',
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

  return (
    <div className='max-w-4xl'>
      <div style={{ direction: 'rtl' }}>
        <p className='text-slate-50'>
          معرفی انواع <a className='text-2xl'>انواع لپ تاپ</a>
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
