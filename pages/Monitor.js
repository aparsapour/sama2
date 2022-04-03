import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { RespTab } from '../components/RespTab';

export default function Monitor() {
  const [inEditMode, SetInEditMode] = useState(false);
  const router = useRouter();
  const items = {
    data: {
      item: {
        items: [
          { id: 20261, model: 'Hansol H750', specs: '' },
          { id: 20262, model: 'LG GSM5B01', specs: '' },
          { id: 20263, model: 'LG Flatron L1755S', specs: '' },
          { id: 20264, model: 'LG Flatron L1730S', specs: '' },
          { id: 20265, model: 'LG Flatron L1552S', specs: '' },
          { id: 20266, model: 'LG Flatron L1510S', specs: '' },
          { id: 20267, model: 'Hansol H750T', specs: '' },
          { id: 20268, model: 'Hansol H550', specs: '' },
          { id: 20269, model: 'Samsung Syncmaster S20G310B', specs: '' },
          { id: 20270, model: 'Samsung SAM 078A', specs: '' },
          { id: 20271, model: 'Samsung Syncmaster 731B', specs: '' },
          { id: 20272, model: 'Samsung Syncmaster NW1943', specs: '' },
          { id: 20273, model: 'Samsung Syncmaster S22A310X', specs: '' },
          { id: 20274, model: 'Hansol 730ED', specs: '' },
          { id: 20275, model: 'Samsung Syncmaster 1743', specs: '' },
          { id: 20276, model: 'Samsung Syncmaster AX 1743', specs: '' },
          { id: 20277, model: 'Samsung S19R325N', specs: '' },
          { id: 20278, model: 'Samsung Syncmaster S20B315B', specs: '' },
          { id: 20279, model: 'Samsung Syncmaster 943SN', specs: '' },
          { id: 20280, model: 'Samsung Syncmaster 1731', specs: '' },
          { id: 20281, model: 'Samsung SAM 0560', specs: '' },
          { id: 20282, model: 'Samsung Syncmaster SN1943', specs: '' },
          { id: 20283, model: 'Samsung Syncmaster B1955N', specs: '' },
          { id: 20284, model: 'Samsung Syncmaster E1945NX', specs: '' },
          { id: 20285, model: 'Samsung SAM 08A4', specs: '' },
          { id: 20286, model: 'Samsung Syncmaster S19G325N', specs: '' },
          { id: 20287, model: 'Samsung Syncmaster S19A310N', specs: '' },
          { id: 20288, model: 'Samsung Syncmaster S19B315N', specs: '' },
          { id: 20289, model: 'Samsung Syncmaster S19G310N', specs: '' },
          { id: 20290, model: 'Samsung Syncmaster S19H310N', specs: '' },
          { id: 20291, model: ' LG  Flatron T730', specs: '' },
          { id: 20292, model: ' Hansol  730ED', specs: '' },
          { id: 20293, model: 'Samsung CRT-  17830', specs: '' },
          { id: 20294, model: 'LG  Flatron 795FT', specs: '' },
          { id: 20295, model: 'Samsung Syncmaster 720N', specs: '' },
          { id: 20296, model: 'Samsung Syncmaster AX1743', specs: '' },
          { id: 20297, model: 'Samsung Syncmaster N1750', specs: '' },
          { id: 20310, model: 'LG IPS/LED 20MP38AB', specs: '' },
          { id: 20312, model: 'Samsung SyncMaster S20R325B', specs: '' },
          { id: 20313, model: 'Samsung SyncMaster P20500', specs: '' },
          { id: 20322, model: 'Samsung Syncmaster SN1933', specs: '' },
          { id: 20323, model: 'Samsung Syncmaster 1731BF', specs: '' },
          { id: 20324, model: 'Samsung S19C150', specs: '' },
          { id: 30347, model: 'X-VISION XL2020AI', specs: '' },
          { id: 30355, model: 'LG IPS226', specs: '' },
          { id: 30357, model: 'LG 20MP38AB', specs: '' },
          { id: 40355, model: 'Samsung S19G310N', specs: '' },
          { id: 40357, model: 'Samsung NW1943 plus', specs: '' },
          { id: 40359, model: 'Samsung LA22B470C8S', specs: '' },
          { id: 40360, model: 'Samsung LS22F355HN', specs: '' },
          { id: 40362, model: 'Samsung S20R325B', specs: '' },
          { id: 40363, model: 'Samsung syncmaster 2075N', specs: '' },
          { id: 40364, model: 'Xvision XT2210H', specs: '' },
          { id: 40367, model: 'Samsung Syncmaster S20A310X', specs: '' },
          { id: 40371, model: 'Samsung B1955N', specs: '' },
          { id: 40374, model: 'Xvision XL2220AIH', specs: '' },
          { id: 40380, model: 'LG 22M38H', specs: '' },
          { id: 40383, model: 'LG Flatron L170B', specs: '' },
          { id: 40384, model: 'Samsung Syncmaster B1931', specs: '' },
          { id: 40386, model: 'Farasso Lavan', specs: '' },
          { id: 40389, model: 'Xvision XL1920AI', specs: '' },
          { id: 40392, model: 'LG 20MK400A', specs: '' },
          { id: 40394, model: 'LG 20MP48A-P', specs: '' },
          { id: 40398, model: 'LG 19EN33S', specs: '' },
          { id: 40399, model: 'Samsung 19A310N', specs: '' },
          { id: 40402, model: 'Samsung 2001', specs: '' },
          { id: 40405, model: 'G-Plus GDM-225JN Monitor 22 inc', specs: '' },
          { id: 40415, model: 'G-Plus GDM-245JN Monitor 24 inch', specs: '' },
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
          معرفی انواع <a className='text-2xl'>مونیتور</a>
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
