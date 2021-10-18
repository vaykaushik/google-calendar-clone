import React from 'react';

const Day = ({day, rowIdx}) => {
    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
                )}
                <p className="text-small p-1 my-1 text-center">
                    {day.format('DD')}
                </p>
            </header>
        </div>
    );
};

export default Day;