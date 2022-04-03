import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';

export default function Ram() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();
  const items = {
    data: {
      item: {
        items: [
          { id: 10076, capacity: '1GB ', type: ' DDR', config: '1X1GB ' },
          { id: 10077, capacity: '1GB ', type: ' DDR2', config: '1X1GB ' },
          { id: 10078, capacity: '2GB ', type: ' DDR3', config: '1X2GB ' },
          { id: 10079, capacity: '2GB ', type: ' DDR3', config: '1X2GB ' },
          { id: 10080, capacity: '2GB ', type: ' DDR2', config: '1X2GB ' },
          { id: 10081, capacity: '2GB ', type: ' DDR', config: '1X2GB ' },
          { id: 10082, capacity: '4GB ', type: ' DDR3', config: '1X4GB ' },
          { id: 10083, capacity: '4GB ', type: ' DDR2', config: '1X4GB ' },
          { id: 10084, capacity: '4GB ', type: ' DDR', config: '1X4GB ' },
          { id: 10085, capacity: '8GB ', type: ' DDR3', config: '1X8GB ' },
          { id: 10086, capacity: '8GB ', type: ' DDR2', config: '1X8GB ' },
          { id: 10087, capacity: '8GB ', type: ' DDR', config: '1X8GB ' },
          { id: 10144, capacity: '512MB ', type: ' DDR', config: '1X512MB ' },
          { id: 10145, capacity: '256MB ', type: ' DDR', config: '1X256MB ' },
          { id: 10146, capacity: '3GB ', type: ' DDR', config: '1X3GB ' },
          { id: 10147, capacity: '3GB ', type: ' DDR2', config: '1X3GB ' },
          { id: 10148, capacity: '3GB ', type: ' DDR3', config: '1X3GB ' },
          { id: 10149, capacity: '1.5GB ', type: ' DDR', config: '1X1.5GB ' },
          { id: 10150, capacity: '1.5GB ', type: ' DDR2', config: '1X1.5GB ' },
          { id: 10151, capacity: '2GB ', type: ' DDR3', config: '1X2GB ' },
          { id: 10152, capacity: '768MB ', type: ' DDR', config: '1X768MB ' },
          { id: 10188, capacity: '16GB ', type: ' DDR3', config: '1X16GB ' },
          { id: 10191, capacity: '5GB', type: 'DDR2', config: '1X5GB' },
          { id: 10192, capacity: '32GB ', type: ' DDR4', config: '1X32GB ' },
          { id: 10196, capacity: '16GB ', type: ' DDR4', config: '1X16GB ' },
          { id: 10262, capacity: '4GB ', type: ' DDR4', config: '1X4GB ' },
          { id: 20316, capacity: '8GB ', type: ' DDR4', config: '1X8GB ' },
          { id: 30331, capacity: '6GB ', type: ' DDR3', config: '1X6GB ' },
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
      headerName: 'ظرفیت',
      field: 'capacity',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'نوع',
      field: 'type',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'ترکیب',
      field: 'config',
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
      capacity: row['capacity'],
      type: row['type'],
      config: row['config'],
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
          معرفی انواع <a className='text-2xl'>حافظه</a>
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
