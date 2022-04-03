import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';

export default function Printer() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();

  /* SELECT CONCAT('{id: ',id,', model: ''',model,''', name: ''',name,''', ip: ''',ip,'''},') FROM Printer  */
  const items = {
    data: {
      item: {
        items: [
          { id: 10095, model: 'عمومی', name: 'چاپگر', ip: '' },
          { id: 20311, model: 'AR-X180', name: 'SHARP', ip: '' },
          { id: 20314, model: 'MF-237W', name: 'Canon', ip: '' },
          { id: 20321, model: 'LaserJet 4250', name: 'HP', ip: '' },
          { id: 20326, model: 'LaserJet Pro 400', name: 'HP', ip: '' },
          { id: 30325, model: 'LaserJet 402n', name: 'HP', ip: '' },
          { id: 40361, model: 'imageclass MF23bn', name: 'Canon', ip: '' },
          { id: 40365, model: 'ML2850D', name: 'Samsung', ip: '' },
          { id: 40368, model: 'LaserJet 1320', name: 'HP', ip: '' },
          { id: 40369, model: 'LaserJet 1300', name: 'HP', ip: '' },
          { id: 40370, model: 'LaserJet 1200', name: 'HP', ip: '' },
          { id: 40372, model: 'AR-5516', name: 'Sharp', ip: '' },
          { id: 40378, model: 'LaserJet pro M254nw', name: 'HP', ip: '' },
          { id: 40379, model: 'ML-2250', name: 'Samsung', ip: '' },
          { id: 40381, model: 'KX-MB2025', name: 'Panasonic', ip: '' },
          { id: 40385, model: 'ML-2571N', name: 'Samsung', ip: '' },
          { id: 40387, model: 'laserjet P2055', name: 'HP', ip: '' },
          { id: 40390, model: 'printer laserjet 1010', name: 'HP', ip: '' },
          { id: 40391, model: 'ML-3310D', name: 'Samsung', ip: '' },
          {
            id: 40393,
            model: 'Printer laserjet MFP M426fdw',
            name: 'HP',
            ip: '',
          },
          { id: 40395, model: '09166', name: 'Sharp', ip: '' },
          { id: 40396, model: '1600', name: 'HP', ip: '' },
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
      headerName: 'نام',
      field: 'name',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'ip',
      field: 'ip',
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
      name: row['name'],
      ip: row['ip'],
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
          معرفی <a className='text-2xl'>چاپگر ها</a>
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
