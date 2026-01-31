
import React, { useState } from 'react';

interface OwnerFormProps {
  onSubmit: (data: any) => void;
  isDarkMode?: boolean;
}

export const OwnerForm: React.FC<OwnerFormProps> = ({ onSubmit, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    dietaryNotes: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClass = `w-full px-5 py-4 rounded-2xl outline-none transition-all font-medium ${isDarkMode ? 'bg-slate-800 text-white shadow-clay-inset placeholder-slate-500' : 'bg-gray-50 text-gray-900 shadow-clay-inset placeholder-gray-400 focus:shadow-none focus:ring-4 focus:ring-orange-100'} border-2 border-transparent focus:border-orange-300`;
  const labelClass = `block text-sm font-bold mb-2 ml-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`;

  return (
    <div className={`rounded-[2rem] p-8 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 shadow-clay-dark' : 'bg-white shadow-clay'}`}>
      <div className="text-center mb-10">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isDarkMode ? 'bg-orange-900/40 text-orange-400 shadow-clay-inset' : 'bg-orange-50 text-primary shadow-clay'}`}>
          <i className="fas fa-dog fa-3x transform -rotate-6"></i>
        </div>
        <h2 className={`text-3xl font-black font-display mb-3 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>刊登您的寶貝資訊</h2>
        <p className={`text-lg font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>填寫詳細資料，為您的寵物找到最合適的玩伴</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>寵物姓名</label>
            <input
              required
              type="text"
              className={inputClass}
              placeholder="例如：麻糬"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>品種</label>
            <input
              required
              type="text"
              className={inputClass}
              placeholder="例如：柴犬"
              value={formData.breed}
              onChange={e => setFormData({ ...formData, breed: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>年紀 (歲)</label>
            <input
              required
              type="number"
              className={inputClass}
              placeholder="數字"
              value={formData.age}
              onChange={e => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>所在地區</label>
            <input
              required
              type="text"
              className={inputClass}
              placeholder="例如：台北市大安區"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>飲食注意事項</label>
          <textarea
            className={`${inputClass} h-32 resize-none`}
            placeholder="例如：對什麼過敏、固定餵食量等..."
            value={formData.dietaryNotes}
            onChange={e => setFormData({ ...formData, dietaryNotes: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-xl font-bold text-xl hover:bg-orange-600 shadow-clay hover:scale-[1.02] transition-all active:scale-[0.98] border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 mt-4"
        >
          刊登寵物
        </button>
      </form>
    </div>
  );
};

export const RenterForm: React.FC<{ onSubmit: (data: any) => void, isDarkMode?: boolean }> = ({ onSubmit, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '女',
    age: '',
    bio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClass = `w-full px-5 py-4 rounded-2xl outline-none transition-all font-medium ${isDarkMode ? 'bg-slate-800 text-white shadow-clay-inset placeholder-slate-500' : 'bg-gray-50 text-gray-900 shadow-clay-inset placeholder-gray-400 focus:shadow-none focus:ring-4 focus:ring-blue-100'} border-2 border-transparent focus:border-blue-300`;
  const labelClass = `block text-sm font-bold mb-2 ml-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`;

  return (
    <div className={`rounded-[2rem] p-8 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 shadow-clay-dark' : 'bg-white shadow-clay'}`}>
      <div className="text-center mb-10">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isDarkMode ? 'bg-blue-900/40 text-blue-400 shadow-clay-inset' : 'bg-blue-50 text-cta shadow-clay'}`}>
          <i className="fas fa-user-check fa-3x transform rotate-6"></i>
        </div>
        <h2 className={`text-3xl font-black font-display mb-3 ${isDarkMode ? 'text-white' : 'text-text-main'}`}>成為陪伴者</h2>
        <p className={`text-lg font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>分享您的愛心，陪伴可愛的毛孩度過快樂時光</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>真實姓名</label>
            <input
              required
              type="text"
              className={inputClass}
              placeholder="輸入您的姓名"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>性別</label>
            <div className="relative">
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                value={formData.gender}
                onChange={e => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="男">男</option>
                <option value="女">女</option>
                <option value="其他">其他</option>
              </select>
              <div className={`absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div>
            <label className={labelClass}>年齡</label>
            <input
              required
              type="number"
              className={inputClass}
              placeholder="您的年齡"
              value={formData.age}
              onChange={e => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          <div className="flex items-end pb-3">
            <div className="flex items-center space-x-2 text-green-500 font-bold text-sm bg-green-50 px-3 py-2 rounded-lg">
              <i className="fas fa-shield-alt"></i>
              <span>通過加密身分驗證系統</span>
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>自我介紹 / 養狗經驗</label>
          <textarea
            required
            className={`${inputClass} h-32 resize-none`}
            placeholder="告訴飼主為什麼您是最好的陪伴人選..."
            value={formData.bio}
            onChange={e => setFormData({ ...formData, bio: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cta text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-600 shadow-clay hover:scale-[1.02] transition-all active:scale-[0.98] border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 mt-4"
        >
          送出身分驗證並加入
        </button>
      </form>
    </div>
  );
};
