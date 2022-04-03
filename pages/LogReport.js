import React, { useState } from 'react';
import { RespTab } from '../components/RespTab';

export default function LogReport() {
  const [pageCount, setPageCount] = useState(1);

  let pageIndex = 1;

  const items = {
    data: {
      item: {
        items: [
          {
            id: 999,
            Amal: 'ورود به حساب کاربری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'ورود موفق',
            Agent: '',
            LogDateTime: 'May 27 2020  7:49AM',
            Ip: '192.168.2.71',
            FullName: 'مدیر سیستم',
            Username: 'master',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 998,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            LogDateTime: 'May 20 2020  2:41PM',
            Ip: '192.168.2.71',
            FullName: 'مدیر سیستم',
            Username: 'master',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 997,
            Amal: 'ورود به حساب کاربری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'ورود موفق',
            Agent: '',
            LogDateTime: 'May 20 2020  2:41PM',
            Ip: '192.168.2.71',
            FullName: 'مدیر سیستم',
            Username: 'master',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 994,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
            LogDateTime: 'May 20 2020 12:48PM',
            Ip: '192.168.0.10',
            FullName: 'حسین کشوری',
            Username: 'navab',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 33,
          },
          {
            id: 993,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
            LogDateTime: 'May 20 2020 12:47PM',
            Ip: '192.168.0.10',
            FullName: 'حسین کشوری',
            Username: 'navab',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 33,
          },
          {
            id: 992,
            Amal: 'ورود به حساب کاربری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'ورود موفق',
            Agent: '',
            LogDateTime: 'May 20 2020 12:47PM',
            Ip: '192.168.0.10',
            FullName: 'حسین کشوری',
            Username: 'navab',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 33,
          },
          {
            id: 991,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            LogDateTime: 'May 20 2020 12:10PM',
            Ip: '192.168.2.71',
            FullName: 'میلاد اله یاری',
            Username: 'milad',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 990,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            LogDateTime: 'May 20 2020 12:09PM',
            Ip: '192.168.2.71',
            FullName: 'میلاد اله یاری',
            Username: 'milad',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 99,
            Amal: 'کاربران',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 0,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
            LogDateTime: 'Jan 27 2020  4:58PM',
            Ip: '::1',
            FullName: 'مدیر سیستم',
            Username: 'master',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 989,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            LogDateTime: 'May 20 2020 11:56AM',
            Ip: '192.168.2.71',
            FullName: 'میلاد اله یاری',
            Username: 'milad',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 987,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            LogDateTime: 'May 20 2020 11:55AM',
            Ip: '192.168.2.71',
            FullName: 'میلاد اله یاری',
            Username: 'milad',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
          {
            id: 986,
            Amal: 'اطلاعات سخت افزاری و نرم افزاری',
            KholasseAmaliat: 0,
            Tozihaat: '',
            Olaviat: 1,
            Natijeh: 'دریافت لیست',
            Agent:
              'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            LogDateTime: 'May 20 2020 11:54AM',
            Ip: '192.168.2.71',
            FullName: 'میلاد اله یاری',
            Username: 'milad',
            ProvinceId: 0,
            CityId: 0,
            LocationId: 32,
          },
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
      headerName: 'نوع عمل',
      field: 'َAmal',
      className: 'border border-slate-900',
    },
    {
      headerName: 'خلاصه عملیات',
      field: 'KholasseAmaliat',
      className: 'border border-slate-900',
    },
    {
      headerName: 'توضبحات',
      field: 'Tozihaat',
      className: 'border border-slate-900',
    },
    {
      headerName: 'اولویت',
      field: 'Olaviat',
      className: 'border border-slate-900',
    },
    {
      headerName: 'نتبجه',
      field: 'Natijeh',
      className: 'border border-slate-900',
    },
    {
      headerName: 'از طریق ابزار',
      field: 'Agent',
      className: 'border border-slate-900',
    },
    {
      headerName: 'زمان',
      field: 'LogDateTime',
      className: 'border border-slate-900',
    },
    { headerName: 'آی پی', field: 'Ip', className: 'border border-slate-900' },
    {
      headerName: 'نام',
      field: 'FullName',
      className: 'border border-slate-900',
    },
    {
      headerName: 'عنوان کاربری',
      field: 'Username',
      className: 'border border-slate-900',
    },
    {
      headerName: 'استان',
      field: 'ProvinceId',
      className: 'border border-slate-900',
    },
    {
      headerName: 'شهر',
      field: 'CityId',
      className: 'border border-slate-900',
    },
    {
      headerName: 'مکان',
      field: 'LocationId',
      className: 'border border-slate-900',
    },
  ];

  const handleUsersRowData = (qry) => {
    if (!qry.data) return [];
    if (qry.data.item.pageCount !== pageCount)
      setPageCount(qry.data.item.pageCount);
    const rowdata = qry.data.item.items.map((row) => ({
      ...row,
      Id: row['Id'],
      Amal: row['Amal'],
      KholasseAmaliat: row['KholasseAmaliat'],
      Tozihaat: row['Tozihaat'],
      Olaviat: row['Olaviat'],
      Natijeh: row['Natijeh'],
      LogDateTime: row['LogDateTime'],
      Ip: row['Ip'],
      FullName: row['FullName'],
      Username: row['Username'],
      Agent: row['Agent'],
      ProvinceId: row['ProvinceId'],
      CityId: row['CityId'],
      LocationId: row['LocationId'],
    }));
    return rowdata;
  };

  return (
    <div className='max-w-4xl'>
      <div style={{ direction: 'rtl' }}>
        <h1 className='font-extrabold text-blue-700 '>مدیریت لاگ</h1>
      </div>
      <div className='grid grid-cols-4 shrink-0'>
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
      <RespTab data={handleUsersRowData(items)} colDefs={colDefs} />
    </div>
  );
}
