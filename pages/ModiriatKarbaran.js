import React, { useState } from 'react';
import { RespTab } from '../components/RespTab';

export default function ModiriatKarbaran() {
  const [inEditMode, SetInEditMode] = useState(false);
  const [pageCount, setPageCount] = useState(1);

  let pageIndex = 1;

  const users = {
    data: {
      item: {
        items: [
          {
            id: '1',
            provinceid: '1',
            cityid: '1',
            departmentid: '1',
            userLevelId: '0',
            password: '1pass',
            naame: 'نام1',
            faamil: '1فامیل',
            phoneNumber: '123456789',
          },
          {
            id: '2',
            provinceid: '1',
            cityid: '1',
            departmentid: '1',
            userLevelId: '0',
            password: '2pass',
            naame: '2نام',
            faamil: '2فامیل',
            phoneNumber: '123456789',
          },
          {
            id: '3',
            provinceid: '1',
            cityid: '1',
            departmentid: '1',
            userLevelId: '1',
            password: '3pass',
            naame: '3نام',
            faamil: '3فامیل',
            phoneNumber: '123456789',
          },
        ],
      },
      pageCount: '1',
    },
  };

  const colDefs = [
    {
      headerName: 'کد پرسنلی',
      field: 'id',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'نام',
      field: 'naame',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'نام خانوادگی',
      field: 'faamil',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'تلفن همراه',
      field: 'phoneNumber',
    },
    {
      headerName: 'استان',
      field: 'provinceid',
    },
    {
      headerName: 'ویرایش',
      field: 'edit',
    },
  ];

  const handleUsersRowData = (qry) => {
    if (!qry.data) return [];
    if (qry.data.item.pageCount !== pageCount)
      setPageCount(qry.data.item.pageCount);
    const rowdata = qry.data.item.items.map((row) => ({
      ...row,
      name: row['naame'] ? row['naame'] : '',
      familly: row['faamil'] ? row['faamil'] : '',
      id: row['id'],
      phoneNumber: row['phoneNumber'],
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

  return (
    <div className='max-w-4xl'>
      <div style={{ direction: 'rtl' }}>
        <h1 className='font-extrabold text-blue-700 '>مدیریت کاربران</h1>
      </div>
      <div className='grid grid-cols-4 shrink-0'>
        <button
          className='col-start-1 
                p-1 md:p-1.5
                m-1 md:m-2
                text-xs md:text-sm
                font-semibold text-white rounded-lg bg-gradient-to-r from-green-300 to-green-500 hover:from-green-400 hover:to-green-600'
        >
          افزودن
        </button>
        <button
          className='col-start-3 
                p-1 md:p-1.5
                m-1 md:m-2
                text-xs md:text-sm
                font-semibold text-white rounded-lg bg-gradient-to-r from-sky-300 to-sky-500 hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-600'
        >
          تنظیمات
        </button>
      </div>
      <RespTab data={handleUsersRowData(users)} colDefs={colDefs} />
    </div>
  );
}
