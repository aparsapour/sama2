import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';
export default function Departments() {
  const [inEditMode, SetInEditMode] = useState(false);
  const [id, SetId] = useState(0);
  const [department, SetDepartment] = useState('');
  const [selectedRow, setSelectedRow] = useState({});
  const router = useRouter();
  /* SELECT CONCAT('{id: ',id,', [department]: ''',[department],'''},') FROM Department  */
  const items = {
    data: {
      item: {
        items: [
          { id: 2, department: 'انفورماتیک' },
          { id: 10088, department: 'دبیرخانه' },
          { id: 10089, department: 'اداره پشتيباني' },
          { id: 10090, department: 'اداره کل منایع انسانی' },
          { id: 10091, department: 'اداره کاگزینی' },
          { id: 10092, department: 'سایر منابع' },
          { id: 10093, department: 'ریاست' },
          { id: 10100, department: 'تشکلهای دینی' },
          { id: 10101, department: 'معاونت فرهنگی' },
          { id: 10170, department: 'معاونت توسعه مدیریت و پشتیبانی' },
          { id: 10173, department: 'اداره کل امور مالی' },
          { id: 10178, department: 'آموزش' },
          { id: 10183, department: 'اداره طرح و برنامه' },
          { id: 10184, department: 'امور مجامع' },
          { id: 10186, department: 'اداره روابط عمومي' },
          { id: 10199, department: 'حراست' },
          { id: 10200, department: 'بسیج و تخلفات' },
          { id: 10202, department: 'تعاوني مصرف' },
          { id: 10205, department: 'كانون بازنشستگان' },
          { id: 10206, department: 'تعاون مسكن' },
          { id: 10224, department: 'معاونت پژوهشی' },
          { id: 10225, department: 'معاونت امورمجلس و استانها' },
          { id: 10226, department: 'اداره کل ادیان و مذاهب' },
          { id: 10227, department: 'اداره کل امورمساجد' },
          { id: 10228, department: 'اداره کل امور فرهنگی و رسانه های نو' },
          { id: 10229, department: 'حقوقی' },
          { id: 10230, department: 'عمران' },
          { id: 10237, department: 'بازرسی' },
          { id: 10239, department: 'واحد گزینش' },
          { id: 10241, department: 'مرکز اسناد' },
          { id: 10244, department: 'دیوان محاسبات' },
          { id: 20303, department: 'مفيد راهبر' },
          { id: 30344, department: 'ستاد اربعین حسینی' },
          { id: 40358, department: 'اداره کل رسانه و عملیات ویژه' },
          { id: 40388, department: 'هیئت امناء' },
          { id: 40404, department: 'معاونت راهبردی' },
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
      headerName: 'واحد سرویس گیرنده',
      field: 'department',
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

  function setFormStates(row) {
    SetId(row['id'] ? row['id'] : 0);
    SetDepartment(row['department'] ? row['department'] : '');
    setSelectedRow(row);
  }

  return (
    <div className='max-w-4xl'>
      <div style={{ direction: 'rtl' }}>
        <p className='text-slate-50'>
          معرفی انواع <a className='text-2xl'>واحد های سرویس گیرنده</a>
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
