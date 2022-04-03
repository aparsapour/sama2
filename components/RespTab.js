import React, { useState } from 'react';

export const RespTab = ({ data, colDefs }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='max-w-5xl text-sm'>
      <div className='hidden md:inline'>
        {' '}
        {/* 'DesktopTable' */}
        <table className='w-full text-center'>
          <thead
            className='bg-white text-sm
                            drop-shadow-[2px_0_1px_rgba(29,38,109,0.3)] mb-1 transition-all duration-300
                            hover:drop-shadow-[0_2px_1px_rgba(29,38,109,0.3)] hover:mb-1 hover:transition-all hover:duration-300'
          >
            <tr>
              {colDefs.map((def, index) => (
                <td key={index}>{def.headerName}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className='odd:bg-[rgb(234,254,183)] hover:odd:bg-[#e0e0e0] even:bg-[#f3f3f5] hover:bg-[#e0e0e0]'
              >
                {colDefs.map((def, ind) => (
                  <td
                    className={`p-0.5 border-[3] ${def.className} && ${def.className}`}
                    key={ind}
                  >
                    {row[def.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='pl-5 w-[88/100] my-1 mx-auto md:hidden'>
        {' '}
        {/* 'MobileTable' */}
        <div>
          <div className='flex justify-between text-sm w-full m-[25px_10px_15px_0]'>
            {' '}
            {/* mobileAccordionHeading */}
            {colDefs.map(
              (def, ind) =>
                def.mobileHeader && <h4 key={ind}>{def.headerName}: </h4>
            )}
            <div style={{ visibility: 'hidden' }}>........</div>
          </div>

          {data.map((row, index) => (
            <details
              className='marker:none'
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <summary
                aria-controls='panel1bh-content'
                id={`panel${index}`}
                class='marker:text-sky-400 list-outside'
              >
                <span className='flex flex-row justify-between text-[10px]'>
                  {' '}
                  {/* eachMobileHeader */}
                  {colDefs.map(
                    (def, ind) =>
                      def.mobileHeader && (
                        <p
                          key={ind}
                          className={`w-full m-1 ${def.className} && ${def.className}`}
                        >
                          {row[def.field]}
                        </p>
                      )
                  )}
                </span>
              </summary>
              <div className='flex flex-row w-full p-0 m-0 text-xs'>
                {' '}
                {/* eachMobileRow */}
                {colDefs.map(
                  (def, ind) =>
                    !def.mobileHeader && (
                      <span
                        key={ind}
                        className='flex items-center justify-around w-full p-0'
                      >
                        <p
                          className={`border-b-2 border-solid border-[#fad3cf] ${def.className} && ${def.className}`}
                        >
                          {def.headerName}: {row[def.field]}
                        </p>
                      </span>
                    )
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};
