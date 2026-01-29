
import React, { useState } from 'react';

interface OwnerFormProps {
  onSubmit: (data: any) => void;
}

export const OwnerForm: React.FC<OwnerFormProps> = ({ onSubmit }) => {
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

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-orange-100 rounded-2xl text-orange-600 mb-4">
          <i className="fas fa-dog fa-2x"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">刊登您的寶貝資訊</h2>
        <p className="text-gray-500 mt-2">填寫詳細資料，為您的寵物找到最合適的玩伴</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">寵物姓名</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="例如：麻糬"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">品種</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="例如：柴犬"
              value={formData.breed}
              onChange={e => setFormData({...formData, breed: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">年紀 (歲)</label>
            <input 
              required
              type="number" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="數字"
              value={formData.age}
              onChange={e => setFormData({...formData, age: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">所在地區</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder="例如：台北市大安區"
              value={formData.location}
              onChange={e => setFormData({...formData, location: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">飲食注意事項</label>
          <textarea 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all h-24"
            placeholder="例如：對什麼過敏、固定餵食量等..."
            value={formData.dietaryNotes}
            onChange={e => setFormData({...formData, dietaryNotes: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 shadow-lg shadow-orange-200 transition-all active:scale-[0.98]"
        >
          刊登寵物
        </button>
      </form>
    </div>
  );
};

export const RenterForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
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

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-blue-100 rounded-2xl text-blue-600 mb-4">
          <i className="fas fa-user-check fa-2x"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">成為陪伴者</h2>
        <p className="text-gray-500 mt-2">分享您的愛心，陪伴可愛的毛孩度過快樂時光</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">真實姓名</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="輸入您的姓名"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">性別</label>
            <select 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
              value={formData.gender}
              onChange={e => setFormData({...formData, gender: e.target.value})}
            >
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">年齡</label>
            <input 
              required
              type="number" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="您的年齡"
              value={formData.age}
              onChange={e => setFormData({...formData, age: e.target.value})}
            />
          </div>
          <div className="flex items-end pb-3">
             <div className="flex items-center space-x-2 text-green-600 font-medium text-sm">
                <i className="fas fa-shield-alt"></i>
                <span>系統將引導進行身分驗證</span>
             </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">自我介紹 / 養狗經驗</label>
          <textarea 
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-32"
            placeholder="告訴飼主為什麼您是最好的陪伴人選..."
            value={formData.bio}
            onChange={e => setFormData({...formData, bio: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
        >
          送出身分驗證並加入
        </button>
      </form>
    </div>
  );
};
