import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';
export default function User() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();
  /* SELECT CONCAT('{id: ',id,', Province: ''',Province,'''},') FROM Ostan  */
  const items = {
    data: {
      item: {
        items: [
          {
            id: 1,
            provinceid: 32,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 1,
            password:
              'AEnkVAtFbfSyq8//ugVOLqGG7aDwtV9CVgr+PnGfuQ32qFJE82htpw5eeItGMQ5gDg==',
            name: 'مدیر',
            family: 'سیستم',
            phoneNumber: '9378019833',
          },
          {
            id: 10,
            provinceid: 9,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'ACYEIu2mR9hFlKnJepPvBOYNcXCdOPCCCus/uQl6157BhzaHsghVllfax5SJJ+BIFg==',
            name: 'محمد',
            family: 'رضوی',
            phoneNumber: '9190236861',
          },
          {
            id: 11,
            provinceid: 11,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AKuTtBzFB9euHzrmtUIMqbaNIN9rR8vn2QGU7m1iDlAV7KK/y/lE2BEPo66yTtPCFA==',
            name: 'یاسر',
            family: 'صادقی',
            phoneNumber: '9155060233',
          },
          {
            id: 12,
            provinceid: 10,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AGNfOmaVXirMYyqbai93DJZOY1IUpi63cQq5FES6Du8ya3CmpoRmuCGZ8b03fEpLrQ==',
            name: 'محمدرضا',
            family: 'شبانی',
            phoneNumber: '9153638946',
          },
          {
            id: 13,
            provinceid: 12,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AGGlqupmRkuH0hUBLeSHcuvgiWc9avVXRcbI3y6l+16+9UJIwGWd1j3FvfbcOhW59w==',
            name: 'مصطفی',
            family: 'عاشوری',
            phoneNumber: '9159717891',
          },
          {
            id: 14,
            provinceid: 13,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'ACvuNBOmIrmHh/+GMJlMaTDSJC9VTtB7a/OYz2rltuaUIlcIm4/4sNePsOFbr90Okg==',
            name: 'هانی',
            family: 'ابوعطوی',
            phoneNumber: '9166008322',
          },
          {
            id: 15,
            provinceid: 14,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'ANSCmRiJS1GZsRgE4W6R6ppjNtKcqNKbkwQYPOTz1jpE3Zke8OsTR1mTkExTpAmNgA==',
            name: 'امیرحسین',
            family: 'اکبری',
            phoneNumber: '9127400811',
          },
          {
            id: 16,
            provinceid: 15,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AFPvPteSLHR2lwd8p/mi2hFDPUm45PLTcPuo88UL6mMqZguptBHPBo60mDBpo6UfAQ==',
            name: 'مهدی',
            family: 'سعیدی',
            phoneNumber: '9359450654',
          },
          {
            id: 17,
            provinceid: 16,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AMOlty9iFSVXAaGp7xIFTIGqI7jg8YZNc+S+Rg6/u2CroNfr+04SM459zuGjFgdayQ==',
            name: 'عبدالرضا',
            family: 'بروسان',
            phoneNumber: '9153496188',
          },
          {
            id: 2,
            provinceid: 1,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AJvQlBfeXkke1gn1eL3mp4lMO6JkD+WFiLiTTRBo45E1zMBNnMoez38nALIA7E3Ytw==',
            name: 'امیر محمد',
            family: 'زاع مجتهدی',
            phoneNumber: '9144058060',
          },
          {
            id: 22,
            provinceid: 17,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AJ5XpzEm2t6jp0XTiM5KcA3QRBLGWVY6871Rbqx2EFEJw6xremkJMJurQpCrnkETNg==',
            name: 'علی',
            family: 'رضایی',
            phoneNumber: '9164930388',
          },
          {
            id: 23,
            provinceid: 18,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'ALH3wKQjsyeCbWoIXXhBwD/pQUqQ8/Z2iSdea8185KyTc5nmiNM/Q/r5W/N4VJ1lPg==',
            name: 'علی',
            family: 'نظری',
            phoneNumber: '9193855008',
          },
          {
            id: 24,
            provinceid: 19,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AMx+sc/a/NWS66Eqbm/AbNpvL5lk6llxEc/phAaNXC9HOpUkpZZMlw4lVgMq7sDJLg==',
            name: 'قم',
            family: 'دریاب',
            phoneNumber: '9192512015',
          },
          {
            id: 25,
            provinceid: 20,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'ACVrPkmTWtJM2lXzmMyA28OhsU1MBkEgTbCs0yzdz3/OQ3UGGlGB623Tk0mqDSGCqQ==',
            name: 'طاها',
            family: 'گرامیان',
            phoneNumber: '9189703475',
          },
          {
            id: 26,
            provinceid: 21,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AIZYbsiUKlMtwhTwQBCBhvmmSvWOq/5DuUxf7Cy5vrsqsHTojF0xMA2k/89oOiSnsQ==',
            name: 'احسان',
            family: 'یعقوبی',
            phoneNumber: '9131409914',
          },
          {
            id: 27,
            provinceid: 23,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AFXEGif4lMyMmzbMuCLHffC9sHEHIEuzQ8YvZdGL+aQE/6VoxbBfrvqxm4i/SVp8wA==',
            name: 'مهدی',
            family: 'اشرفی',
            phoneNumber: '9122955130',
          },
          {
            id: 28,
            provinceid: 22,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AEC8Mq4JQrxrN1JMYYzgeubo8vaOPPcGdnBNA/zKuM/n7H3ZzU1txssp6kyo1QCjJw==',
            name: 'نواب',
            family: 'ملک حسینی',
            phoneNumber: '9171439699',
          },
          {
            id: 29,
            provinceid: 24,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AFWcRY+TqKepIFBAEmv9s2ANqnw7omRXK3Twv/rNiGtAb0nmhMM+JFuqN647iDD3qQ==',
            name: 'علیرضا ',
            family: 'اژدری زرمهری',
            phoneNumber: '9113759093',
          },
          {
            id: 3,
            provinceid: 2,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AFHf+b/cpRZ3OsWz30o/Slvp31dBF+CFtU7imDcuVgaH5/GzjNOEPaY916eF7ihocg==',
            name: 'سعید',
            family: 'طالب پور',
            phoneNumber: '9141476285',
          },
          {
            id: 30,
            provinceid: 25,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AKbZGzvVgxLmOGzJWkXxXsh1j8Q5gxN5tnGd5ttXUMioo8v+KCDku4CqBZLGzUyLSQ==',
            name: 'مرتضی',
            family: 'نوری',
            phoneNumber: '9111374887',
          },
          {
            id: 31,
            provinceid: 26,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'ANwmsu+G7lDH3b4B24UhaYeyO19kfM7ToIPM+9skcB/ic/NXrlCzzRMz32/5ATCIVg==',
            name: 'خانم',
            family: 'خسروی',
            phoneNumber: '9396276152',
          },
          {
            id: 32,
            provinceid: 27,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AC03OQzYLN12R8A1seuT3hJEtxbyKj1gJXdhL9RIJDghYQCIBHJGYy1/v4QkcHjJ2Q==',
            name: 'محمد باقر',
            family: 'جعفر تبار',
            phoneNumber: '9356638832',
          },
          {
            id: 33,
            provinceid: 28,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AP0Nq5WdvLZbcO0EdRn92JnTCPUoaJX9C75wWQYEjX0C5DQqYMUKJrUvU7ldS0lSkg==',
            name: 'مازیار',
            family: 'فراهانی',
            phoneNumber: '9183683660',
          },
          {
            id: 34,
            provinceid: 29,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AHmxawjc09Uqg+/j5YFqKR3d+XW3olZNju3Q///fIJkctERlkaOwh6J/xwlNhJeGZw==',
            name: 'احمد',
            family: 'توکلی',
            phoneNumber: '9177511311',
          },
          {
            id: 35,
            provinceid: 30,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AEWDrXdAkjrMYqglA5e26btDD+Ltp/MeoPeo851XKxn2OJZluq3u0z9Rrai/on/86A==',
            name: 'محمد',
            family: 'محمدی شایان',
            phoneNumber: '9189095695',
          },
          {
            id: 36,
            provinceid: 31,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AGERdBbwtjIax7gj+WmWUgvCrz17KBZpzWJb2Y9oba528h+HB5bTevj1aVwDk/rXFA==',
            name: 'حسین',
            family: 'عارف منش',
            phoneNumber: '9133530853',
          },
          {
            id: 37,
            provinceid: 33,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AGPPbGNNBoftY2yFe7T8s9wPwPZBtoan8wNqSpCgUqNv/6kBcNzM66EPBcjjAE1JyQ==',
            name: 'حسین',
            family: 'کشوری',
            phoneNumber: '9126344180',
          },
          {
            id: 38,
            provinceid: 32,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AHQZOIQUdnPei0IKohmBb8h6ztQhluPW4lsmE80YTi4p2ufPC4CotLafbjlZICcZwg==',
            name: 'میلاد',
            family: 'اله یاری',
            phoneNumber: '9129403614',
          },
          {
            id: 4,
            provinceid: 3,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AGZar5v4TVnHmLzGLS4eXFbjMgm2ln7sYfr6Y+R5WqS4OvbgweoK4OmiyWxETQFcDA==',
            name: 'سعید',
            family: 'رحمت نیا',
            phoneNumber: '9141546212',
          },
          {
            id: 5,
            provinceid: 4,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AJU5eHDob/IH7Eemmu7HmbyHcYwZOGDhpEO5DmGm+qW4KxRe37hPBtZSMxv1d+xxYg==',
            name: 'مجتبی',
            family: 'فرمان آرا',
            phoneNumber: '9131104017',
          },
          {
            id: 6,
            provinceid: 5,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AE9Q+Dn2wwrleTfqnBuNnvkd0RSlYtCfPQdlJowKI5AC89pDf7j7ct7ix9Um85rHgw==',
            name: 'امین',
            family: 'افضلان',
            phoneNumber: '9124661355',
          },
          {
            id: 7,
            provinceid: 6,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AFYdjMn9cwU932ffhrb4fhsgM1StgH+zL/NyYcPEjTFVDdyb1LXICi0Ubqsf0F85WQ==',
            name: 'امیر',
            family: 'بلوچی',
            phoneNumber: '9187441700',
          },
          {
            id: 8,
            provinceid: 7,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AHF6868w3/qQvLNcRdx5MYAi/LLslzrHySeNSefVqqIvFgtUMadFBAj1faAR5Ue4zQ==',
            name: 'میثم',
            family: 'زرین',
            phoneNumber: '9178568875',
          },
          {
            id: 9,
            provinceid: 8,
            cityid: 0,
            deartmentid: 0,
            userLevelId: 2,
            password:
              'AFq5MVy2QzyglG7K3NbkmsLCDSduQ7Kdclffo6hQeoYpSFEpWqbOffINPac9cRv2cg==',
            name: 'محمد',
            family: 'قلی زاده',
            phoneNumber: '9364932690',
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
      headerName: 'استان',
      field: 'Provinceid',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'شهر',
      field: 'cityid',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'واحد سازمانی',
      field: 'departmentid',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'سطح کاربری',
      field: 'userLevelId',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'رمز عبور',
      field: 'password',
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
      headerName: 'نام فامیل',
      field: 'family',
      mobileHeader: true,
      className: 'border border-slate-900',
    },
    {
      headerName: 'شماره تلفن',
      field: 'phoneNumber',
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
      Provinceid: row['Provinceid'],
      cityid: row['cityid'],
      departmentid: row['departmentid'],
      userLevelId: row['userLevelId'],
      password: row['usepasswordrLevelId'],
      name: row['name'],
      family: row['family'],
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
  const [pageCount, setPageCount] = useState(1);

  let pageIndex = 1;

  return (
    <div className='max-w-4xl'>
      <div style={{ direction: 'rtl' }}>
        <p className='text-slate-50'>
          تعریف <a className='text-2xl'>کاربران</a>
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
