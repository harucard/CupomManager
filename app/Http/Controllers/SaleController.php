<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Sale as SaleResource;
use App\Models\Sale;
class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SaleResource::collection(Sale::all());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'cupom' => 'nullable',
            'desconto' => 'nullable',
            'subtotal' => 'required',
            
        ]);
        $sale = new Sale([
            'cupom'=> $request->cupom,
            'desconto'=> $request->desconto,
            'subtotal'=> $request->subtotal,
            
        ]);
        $sale ->save();
        return response()->json([
            'data'=>'Venda Efetuada'
        ]);
    }
    /** 
     * Show the form for editing the espedified resource.
     * 
     *@param int $id
     *@return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    $request->validate([
        'cupom' => 'nullable',
        'desconto' => 'nullable',
        'subtotal' => 'required',
    ]);
    $sale = Sale::findOrFail($id);
    $sale->cupom=$request->cupom;
    $sale->desconto=$request->desconto;
    $sale->subtotal=$request->subtotal;
    $sale->save();
    return response()->json([
        'data'=> 'Venda'
    ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
    }
}
