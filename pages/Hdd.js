import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';
export default function Hdd() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();
  /* SELECT CONCAT('{id: ',id,', specs: ''',specs,'''},') FROM [SAMA2].[dbo].[HDD]  */
  const hdds = {
    data: {
      item: {
        items: [
          { id: 5, specs: '40GB' },
          { id: 10071, specs: '120GB' },
          { id: 10072, specs: '80GB' },
          { id: 10094, specs: '1TB' },
          { id: 10112, specs: '60GB' },
          { id: 10113, specs: '120GB SSD' },
          { id: 10115, specs: '160GB' },
          { id: 10117, specs: '160GB' },
          { id: 10118, specs: '500GB' },
          { id: 10119, specs: '2T' },
          { id: 10120, specs: '320GB' },
          { id: 10121, specs: '120GB' },
          { id: 10195, specs: '2740GB' },
          { id: 10209, specs: '250GB' },
          { id: 10216, specs: '3T - 240GB SSD' },
          { id: 10220, specs: '500GB + 120GB SSD' },
          { id: 10242, specs: '20G' },
          { id: 20301, specs: '1T + 120GB SSD' },
          { id: 20305, specs: '240GB SSD' },
          { id: 20307, specs: '1TB + 240 GB SSD' },
          { id: 20308, specs: '2T + 240 G SSD' },
          { id: 30323, specs: '160GB + 120GB SSD' },
          { id: 30332, specs: '250GB + 240GB SSD' },
        ],
      },
      pageCount: '5' /* 51 */,
    },
  };

  const colDefs = [
    {
      headerName: 'شناسه',
      field: 'id',
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
          معرفی انواع <a className='text-2xl'>دیسک سخت</a>
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
      <RespTab data={handleUsersRowData(hdds)} colDefs={colDefs} />
    </div>
  );
}
