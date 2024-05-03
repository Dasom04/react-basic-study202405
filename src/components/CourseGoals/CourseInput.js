import React from 'react';
import Button from '../UI/Button/Button';
import './CourseInput.css';

const CourseInput = () => {
  return (
    <form>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
