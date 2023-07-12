'use client';

import React, { DragEventHandler, EventHandler, MouseEventHandler, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mahjong_basic_rule from '../../../public/ts/mahjong_basic_rule'

export default function Home() {
  const [allTileName] = useState(['01_m1',
  '02_m2',
  '03_m3',
  '04_m4',
  '05_m5',
  '06_m5r',
  '07_m6',
  '08_m7',
  '09_m8',
  '10_m9',
  '11_p1',
  '12_p2',
  '13_p3',
  '14_p4',
  '15_p5',
  '16_p5r',
  '17_p6',
  '18_p7',
  '19_p8',
  '20_p9',
  '21_s1',
  '22_s2',
  '23_s3',
  '24_s4',
  '25_s5',
  '26_s5r',
  '27_s6',
  '28_s7',
  '29_s8',
  '30_s9',
  '31_east',
  '32_south',
  '33_west',
  '34_north',
  '35_white',
  '36_green',
  '37_red',
  '38_back',])
  const [selectedTile, setSelectedTile] = useState<string[]>([]);
  const [dragTile, setDragTile] = useState('');
  const [removedTile, setRemovedTile] = useState('');

  useEffect(() => {
    const mbr = new mahjong_basic_rule();
    mbr.OK();
  },[selectedTile, dragTile, removedTile])

  const dragstart_for_selection = (event : React.DragEvent) => {
    setDragTile(event.currentTarget.className);
  };

  const dragover_for_selection = (event : React.DragEvent) => {
    event.preventDefault();
  };

  const drop_for_selection = (event : React.DragEvent) => {
    event.preventDefault();
    if (
      dragTile !== '' &&
      selectedTile.length < 14
    ) {
      let count = 0;
      selectedTile.forEach((value) => {
        if (value === dragTile) {
          count++;
        }
      });
      if (count != 4) {
        selectedTile.push(dragTile);
        selectedTile.sort();
        setSelectedTile(selectedTile);
        setDragTile('');
      }
    }
  };

  const drop_for_switching = (event : React.DragEvent) => {
    if (
      event.currentTarget.parentElement !== null &&
      event.currentTarget.parentElement.id === 'drop' &&
      selectedTile.includes(event.currentTarget.className) &&
      dragTile !== '' &&
      removedTile ===''
    ) {
      let index = selectedTile.indexOf(event.currentTarget.className);
      selectedTile.splice(index, 1);
      selectedTile.sort();
      setSelectedTile(selectedTile);

      let count = 0;
      selectedTile.forEach((value) => {
        if (value === dragTile) {
          count++;
        }
      });
      if (count != 4) {
        selectedTile.push(dragTile);
        let index = selectedTile.indexOf(event.currentTarget.className);
        selectedTile.splice(index, 1)        
        selectedTile.sort();
        setSelectedTile(selectedTile);
        setDragTile('');
      }
    }else if(
      removedTile !== '' &&
      dragTile === ''
      ){
        let count = 0;
        selectedTile.forEach((value) => {
          if (event.currentTarget.className === value) {
            count++;
          }
        });
        if (count != 4) {
          selectedTile.push(event.currentTarget.className);
          selectedTile.sort();
          setSelectedTile(selectedTile);
        }
    }
  }

  const dragstart_for_remove = (event : React.DragEvent) => {
    setRemovedTile(event.currentTarget.className);
  }; 

  const dragover_for_remove = (event : React.DragEvent) => {
    event.preventDefault();
  };

  const drop_for_remove = (event : React.DragEvent) => {
    event.preventDefault();
    console.log(event.currentTarget.className);
    if (
      removedTile !== '' &&
      selectedTile.includes(removedTile)
    ) {
      let index = selectedTile.indexOf(removedTile);
      selectedTile.splice(index, 1);
      setSelectedTile(selectedTile);
      setRemovedTile('');
    }
  };

  return (
    <div>
      <p>聴牌を判定するページ</p>
      <Link href='../'>戻る</Link>
      <div>
        <div onDragOver={dragover_for_remove} onDrop={drop_for_remove}>
          <div>風牌</div>
          <div>
            <div>マンズ</div>
            <div>
              {allTileName.map((value, key) => {
                let src = '/img/Tile_img/' + value + '.png';
                if (key < 10) {
                  return (
                    <Image
                      src={src}
                      width={82}
                      height={119}
                      draggable="true"
                      alt={value}
                      key={key}
                      id={value}
                      className={value}
                      onDragStart={dragstart_for_selection}
                      onDrop={drop_for_switching}
                    />
                  );
                }
              })}
            </div>
            <div>ピンズ</div>
            <div>
              {allTileName.map((value, key) => {
                let src = '/img/Tile_img/' + value + '.png';
                if (9 < key && key < 20) {
                  return (
                    <Image
                      src={src}
                      width={82}
                      height={119}
                      draggable="true"
                      alt={value}
                      key={key}
                      id={value}
                      className={value}
                      onDragStart={dragstart_for_selection}
                      onDrop={drop_for_switching}
                    />
                  );
                }
              })}
            </div>
            <div>ソーズ</div>
            <div>
              {allTileName.map((value, key) => {
                let src = '/img/Tile_img/' + value + '.png';
                if (19 < key && key < 30) {
                  return (
                    <Image
                      src={src}
                      width={82}
                      height={119}
                      draggable="true"
                      alt={value}
                      key={key}
                      id={value}
                      className={value}
                      onDragStart={dragstart_for_selection}
                      onDrop={drop_for_switching}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div>字牌</div>
          <div>
            <div>風牌</div>
            <div>
              {allTileName.map((value, key) => {
                let src = '/img/Tile_img/' + value + '.png';
                if (29 < key && key < 34) {
                  return (
                    <Image
                      src={src}
                      width={82}
                      height={119}
                      draggable="true"
                      alt={value}
                      key={key}
                      id={value}
                      className={value}
                      onDragStart={dragstart_for_selection}
                      onDrop={drop_for_switching}
                    />
                  );
                }
              })}
            </div>
            <div>三元牌</div>
            <div>
              {allTileName.map((value, key) => {
                let src = '/img/Tile_img/' + value + '.png';
                if (33 < key && key < 37) {
                  return (
                    <Image
                      src={src}
                      width={82}
                      height={119}
                      draggable="true"
                      alt={value}
                      key={key}
                      id={value}
                      className={value}
                      onDragStart={dragstart_for_selection}
                      onDrop={drop_for_switching}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div>選択中の牌の総数は{selectedTile.length}</div>
        <div
          id="drop"
          className='drop_zone'
          onDrop={drop_for_selection}
          onDragOver={dragover_for_selection}
        >
          {selectedTile.map((value, key) => {
            let src = '/img/Tile_img/' + value + '.png';
            return (
              <Image
                src={src}
                width={82}
                height={119}
                alt={value}
                key={key}
                className={value}
                id={key + '_' + value}
                onDragStart={dragstart_for_remove}
                onDrop={drop_for_switching}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
