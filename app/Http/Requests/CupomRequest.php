<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CupomRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
           ' title'=>'required',
           'expires_in'=>'required',
           'quantity'=>'required|Numeric',
           'status'=>'required',
        ];
    }
    public function messages()
{
    return [
        'title.required' => 'Campo titulo não preenchido',
        'expires_in.required' => 'Campo Data não preenchido',
        'quantity.required'=>'Campo Quantidade não preenchido',
        
    ];
}
}
