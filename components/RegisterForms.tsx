
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

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-orange-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-gray-200 text-gray-900'}`;
  const labelClass = `block text-sm font-semibold mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`;

  return (
    <div className={`rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
      <div className="text-center mb-8">
        <div className={`inline-block p-4 rounded-2xl mb-4 ${isDarkMode ? 'bg-orange-900/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
          <i className="fas fa-dog fa-2x"></i>
        </div>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>刊登您的寶貝資訊</h2>
        <p className={isDarkMode ? 'text-slate-400 mt-2' : 'text-gray-500 mt-2'}>填寫詳細資料，為您的寵物找到最合適的玩伴</p>
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
              onChange={e => setFormData({...formData, name: e.target.value})}
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
              onChange={e => setFormData({...formData, breed: e.target.value})}
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
              onChange={e => setFormData({...formData, age: e.target.value})}
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
              onChange={e => setFormData({...formData, location: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>飲食注意事項</label>
          <textarea 
            className={`${inputClass} h-24`}
            placeholder="例如：對什麼過敏、固定餵食量等..."
            value={formData.dietaryNotes}
            onChange={e => setFormData({...formData, dietaryNotes: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98]"
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

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-gray-200 text-gray-900'}`;
  const labelClass = `block text-sm font-semibold mb-1 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`;

  return (
    <div className={`rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
      <div className="text-center mb-8">
        <div className={`inline-block p-4 rounded-2xl mb-4 ${isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
          <i className="fas fa-user-check fa-2x"></i>
        </div>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>成為陪伴者</h2>
        <p className={isDarkMode ? 'text-slate-400 mt-2' : 'text-gray-500 mt-2'}>分享您的愛心，陪伴可愛的毛孩度過快樂時光</p>
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
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className={labelClass}>性別</label>
            <select 
              className={inputClass}
              value={formData.gender}
              onChange={e => setFormData({...formData, gender: e.target.value})}
            >
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>年齡</label>
            <input 
              required
              type="number" 
              className={inputClass}
              placeholder="您的年齡"
              value={formData.age}
              onChange={e => setFormData({...formData, age: e.target.value})}
            />
          </div>
          <div className="flex items-end pb-3">
             <div className="flex items-center space-x-2 text-green-500 font-medium text-sm">
                <i className="fas fa-shield-alt"></i>
                <span>通過加密身分驗證系統</span>
             </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>自我介紹 / 養狗經驗</label>
          <textarea 
            required
            className={`${inputClass} h-32`}
            placeholder="告訴飼主為什麼您是最好的陪伴人選..."
            value={formData.bio}
            onChange={e => setFormData({...formData, bio: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
        >
          送出身分驗證並加入
        </button>
      </form>
    </div>
  );
};
