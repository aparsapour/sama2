import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';
export default function Province() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();
  /* SELECT CONCAT('{id: ',id,', Province: ''',Province,'''},') FROM Ostan  */
  const items = {
    data: {
      item: {
        items: [
          { id: 1, Province: 'آذربايجان شرقي' },
          { id: 2, Province: 'آذربايجان غربي' },
          { id: 3, Province: 'اردبيل' },
          { id: 4, Province: 'اصفهان' },
          { id: 5, Province: 'البرز' },
          { id: 6, Province: 'ايلام' },
          { id: 7, Province: 'بوشهر' },
          { id: 8, Province: 'تهران' },
          { id: 9, Province: 'چهارمحال وبختيارئ' },
          { id: 10, Province: 'خراسان جنوبي' },
          { id: 11, Province: 'خراسان رضوئ' },
          { id: 12, Province: 'خراسان شمالي' },
          { id: 13, Province: 'خوزستان' },
          { id: 14, Province: 'زنجان' },
          { id: 15, Province: 'سمنان' },
          { id: 16, Province: 'سيستان وبلوچستان' },
          { id: 17, Province: 'فارس' },
          { id: 18, Province: 'قزوين' },
          { id: 19, Province: 'قم' },
          { id: 20, Province: 'كردستان' },
          { id: 21, Province: 'كرمان' },
          { id: 22, Province: 'كهگيلويه وبويراحمد' },
          { id: 23, Province: 'کرمانشاه' },
          { id: 24, Province: 'گلستان' },
          { id: 25, Province: 'گيلان' },
          { id: 26, Province: 'لرستان' },
          { id: 27, Province: 'مازندران' },
          { id: 28, Province: 'مرکزي' },
          { id: 29, Province: 'هرمزگان' },
          { id: 30, Province: 'همدان' },
          { id: 31, Province: 'يزد' },
          { id: 32, Province: 'دفتر مرکزي' },
          { id: 33, Province: 'نواب' },
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
      headerName: 'نام استان',
      field: 'Province',
      mobileHeader: true,
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
      Province: row['Province'],
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
          تعریف <a className='text-2xl'>استانها</a>
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
