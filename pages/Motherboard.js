import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';

export default function Motherboard() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();
  const items = {
    data: {
      item: {
        items: [
          { id: 10122, model: 'Asus P5GC MX/1333', specs: '' },
          { id: 10123, model: 'Asus H81M-C', specs: '' },
          { id: 10124, model: 'Asus M2N-alpha', specs: '' },
          { id: 10125, model: 'Asus M4N68T-M v2', specs: '' },
          { id: 10126, model: 'Asus P5G41T-M-LX', specs: '' },
          { id: 10127, model: 'Asus P5PE-VM', specs: '' },
          { id: 10128, model: 'Asus H61.MC', specs: '' },
          { id: 10129, model: 'Asus P5KPL-AM SE', specs: '' },
          { id: 10130, model: 'Jetway', specs: '' },
          { id: 10132, model: 'Asus P5G41-T', specs: '' },
          { id: 10133, model: 'Asus P5GC-MX', specs: '' },
          { id: 10134, model: 'Asus M4N68T-M lf v2', specs: '' },
          { id: 10135, model: 'Asus P5PE -VM', specs: '' },
          { id: 10136, model: 'Asus P5 P800 IE', specs: '' },
          { id: 10137, model: 'Asus M2N-x', specs: '' },
          { id: 10138, model: 'Asus P4XP.X', specs: '' },
          { id: 10139, model: 'Asus P5 S8000 -VM', specs: '' },
          { id: 10140, model: 'MSI V Class', specs: '' },
          { id: 10141, model: 'Gigabyte S3', specs: '' },
          { id: 10143, model: 'Asus  M2NPE7', specs: '' },
          { id: 10180, model: 'Asus P4v533-mx', specs: '' },
          { id: 10190, model: 'Asus maximus formula', specs: '' },
          { id: 10193, model: 'Asus z,7pro', specs: '' },
          { id: 10194, model: 'Asus z170-p', specs: '' },
          { id: 10197, model: 'Gigabyte 945pl-s3', specs: '' },
          { id: 10203, model: 'Asus P5DC-MX', specs: '' },
          { id: 10204, model: 'ASUS TEK COMPUTER INC', specs: '' },
          { id: 10207, model: 'MSI MS-7592', specs: '' },
          { id: 10208, model: 'GTGBTE H61M S2P-B3', specs: '' },
          { id: 10213, model: 'ASUS Z97-PRO Wi-Fi ac', specs: '' },
          { id: 10215, model: 'GIGABYTE GA-MA770T-UD3', specs: '' },
          { id: 10217, model: 'ASUS P5KPL-AM', specs: '' },
          { id: 10222, model: 'MSI MS-AA841 (all in one)1', specs: '' },
          { id: 10223, model: 'Asus m4n 78 se', specs: '' },
          { id: 10232, model: 'Asus P5PL-E ', specs: '' },
          { id: 10233, model: 'Asus P8P200', specs: '' },
          { id: 10234, model: 'Asus P4P43TD', specs: '' },
          { id: 10235, model: 'Asus P5KC', specs: '' },
          { id: 10236, model: 'Asus P4XPX', specs: '' },
          { id: 10238, model: 'Asus P4 S800 ', specs: '' },
          { id: 10240, model: 'Asus m2npv-mx', specs: '' },
          { id: 10243, model: 'Asus P4BGL-MX/533', specs: '' },
          { id: 10245, model: 'Asus H110M-C', specs: '' },
          { id: 10261, model: 'ASUS H110M-R', specs: '' },
          { id: 20298, model: 'ASUS P5K-E', specs: '' },
          { id: 20304, model: 'MSI -K9VGM-V ', specs: '' },
          { id: 20309, model: 'Asus P8 Z77-VPro', specs: '' },
          { id: 20315, model: 'Asus P8P67 LE', specs: '' },
          { id: 20317, model: 'Gigabyte GA-H61M-S2P', specs: '' },
          { id: 20319, model: 'GYGABYTE 8I865GME-775', specs: '' },
          { id: 20320, model: 'Albatron PX865PE Pro', specs: '' },
          { id: 30315, model: 'MSI MS - 7253', specs: '' },
          { id: 30317, model: 'ASUS B75M-A', specs: '' },
          { id: 30326, model: 'Asus P5GD1-VM', specs: '' },
          { id: 30334, model: 'Asus PRIME Z270-P', specs: '' },
          { id: 30345, model: 'ASUS H310M-D', specs: '' },
          { id: 30349, model: 'Asus P8H61 R2', specs: '' },
          { id: 30351, model: 'Gygabyte GA-G31M-ES2C', specs: '' },
          { id: 30353, model: 'EliteGroup A740GM-M', specs: '' },
          { id: 40403, model: 'MSI All in One', specs: '' },
          { id: 40406, model: 'ASUS PRIME H310M-C/PS R2.0', specs: '' },
          { id: 40407, model: 'ASUS PRIME H310M-R R2.0 ', specs: '' },
          { id: 40408, model: 'ASUS 0.PRIME H310M-A R2', specs: '' },
          { id: 40409, model: 'ASUS PRIME H310-PLUS R2.0', specs: '' },
          { id: 40410, model: 'ASUS PRIME B360M-A ', specs: '' },
          { id: 40413, model: 'ASUS PRIME H410M-A', specs: '' },
          { id: 40414, model: 'ASUS PRIME B560M-A', specs: '' },
          { id: 10122, model: 'Asus P5GC MX/1333', specs: '' },
          { id: 10123, model: 'Asus H81M-C', specs: '' },
          { id: 10124, model: 'Asus M2N-alpha', specs: '' },
          { id: 10125, model: 'Asus M4N68T-M v2', specs: '' },
          { id: 10126, model: 'Asus P5G41T-M-LX', specs: '' },
          { id: 10127, model: 'Asus P5PE-VM', specs: '' },
          { id: 10128, model: 'Asus H61.MC', specs: '' },
          { id: 10129, model: 'Asus P5KPL-AM SE', specs: '' },
          { id: 10130, model: 'Jetway', specs: '' },
          { id: 10132, model: 'Asus P5G41-T', specs: '' },
          { id: 10133, model: 'Asus P5GC-MX', specs: '' },
          { id: 10134, model: 'Asus M4N68T-M lf v2', specs: '' },
          { id: 10135, model: 'Asus P5PE -VM', specs: '' },
          { id: 10136, model: 'Asus P5 P800 IE', specs: '' },
          { id: 10137, model: 'Asus M2N-x', specs: '' },
          { id: 10138, model: 'Asus P4XP.X', specs: '' },
          { id: 10139, model: 'Asus P5 S8000 -VM', specs: '' },
          { id: 10140, model: 'MSI V Class', specs: '' },
          { id: 10141, model: 'Gigabyte S3', specs: '' },
          { id: 10143, model: 'Asus  M2NPE7', specs: '' },
          { id: 10180, model: 'Asus P4v533-mx', specs: '' },
          { id: 10190, model: 'Asus maximus formula', specs: '' },
          { id: 10193, model: 'Asus z,7pro', specs: '' },
          { id: 10194, model: 'Asus z170-p', specs: '' },
          { id: 10197, model: 'Gigabyte 945pl-s3', specs: '' },
          { id: 10203, model: 'Asus P5DC-MX', specs: '' },
          { id: 10204, model: 'ASUS TEK COMPUTER INC', specs: '' },
          { id: 10207, model: 'MSI MS-7592', specs: '' },
          { id: 10208, model: 'GTGBTE H61M S2P-B3', specs: '' },
          { id: 10213, model: 'ASUS Z97-PRO Wi-Fi ac', specs: '' },
          { id: 10215, model: 'GIGABYTE GA-MA770T-UD3', specs: '' },
          { id: 10217, model: 'ASUS P5KPL-AM', specs: '' },
          { id: 10222, model: 'MSI MS-AA841 (all in one)1', specs: '' },
          { id: 10223, model: 'Asus m4n 78 se', specs: '' },
          { id: 10232, model: 'Asus P5PL-E ', specs: '' },
          { id: 10233, model: 'Asus P8P200', specs: '' },
          { id: 10234, model: 'Asus P4P43TD', specs: '' },
          { id: 10235, model: 'Asus P5KC', specs: '' },
          { id: 10236, model: 'Asus P4XPX', specs: '' },
          { id: 10238, model: 'Asus P4 S800 ', specs: '' },
          { id: 10240, model: 'Asus m2npv-mx', specs: '' },
          { id: 10243, model: 'Asus P4BGL-MX/533', specs: '' },
          { id: 10245, model: 'Asus H110M-C', specs: '' },
          { id: 10261, model: 'ASUS H110M-R', specs: '' },
          { id: 20298, model: 'ASUS P5K-E', specs: '' },
          { id: 20304, model: 'MSI -K9VGM-V ', specs: '' },
          { id: 20309, model: 'Asus P8 Z77-VPro', specs: '' },
          { id: 20315, model: 'Asus P8P67 LE', specs: '' },
          { id: 20317, model: 'Gigabyte GA-H61M-S2P', specs: '' },
          { id: 20319, model: 'GYGABYTE 8I865GME-775', specs: '' },
          { id: 20320, model: 'Albatron PX865PE Pro', specs: '' },
          { id: 30315, model: 'MSI MS - 7253', specs: '' },
          { id: 30317, model: 'ASUS B75M-A', specs: '' },
          { id: 30326, model: 'Asus P5GD1-VM', specs: '' },
          { id: 30334, model: 'Asus PRIME Z270-P', specs: '' },
          { id: 30345, model: 'ASUS H310M-D', specs: '' },
          { id: 30349, model: 'Asus P8H61 R2', specs: '' },
          { id: 30351, model: 'Gygabyte GA-G31M-ES2C', specs: '' },
          { id: 30353, model: 'EliteGroup A740GM-M', specs: '' },
          { id: 40403, model: 'MSI All in One', specs: '' },
          { id: 40406, model: 'ASUS PRIME H310M-C/PS R2.0', specs: '' },
          { id: 40407, model: 'ASUS PRIME H310M-R R2.0 ', specs: '' },
          { id: 40408, model: 'ASUS 0.PRIME H310M-A R2', specs: '' },
          { id: 40409, model: 'ASUS PRIME H310-PLUS R2.0', specs: '' },
          { id: 40410, model: 'ASUS PRIME B360M-A ', specs: '' },
          { id: 40413, model: 'ASUS PRIME H410M-A', specs: '' },
          { id: 40414, model: 'ASUS PRIME B560M-A', specs: '' },
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
          معرفی انواع <a className='text-2xl'>مادربورد</a>
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
